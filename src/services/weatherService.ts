import fetch from 'node-fetch';
import { City, Weather } from '../types';

export async function getCitySuggestions(input: string): Promise<City[]> {
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}`);
  const data = (await res.json()) as any;
  if (!data.results) return [];
  return data.results.map((c: any) => ({
    id: `${c.latitude},${c.longitude}`,
    name: c.name,
    latitude: c.latitude,
    longitude: c.longitude,
    country: c.country,
  }));
}

export async function getCityById(cityId: string): Promise<City | null> {
  const [lat, lon] = cityId.split(',');
  if (!lat || !lon) return null;
  // OpenMeteo does not provide reverse geocoding, so we return minimal info
  return {
    id: cityId,
    name: 'Selected City',
    latitude: parseFloat(lat),
    longitude: parseFloat(lon),
    country: '',
  };
}

export async function getWeatherForecast(cityId: string): Promise<Weather> {
  const city = await getCityById(cityId);
  if (!city) throw new Error('City not found');
  const { latitude, longitude } = city;

  // Use OpenMeteo current weather endpoint
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = (await res.json()) as any;
  if (!data.current_weather) throw new Error('Weather not found');
  const w = data.current_weather;
  return {
    temperature: w.temperature,
    description: `Weather code ${w.weathercode}`,
    icon: undefined, // OpenMeteo does not provide icons
    windSpeed: w.windspeed,
    precipitation: undefined, // Not available in current_weather
  };
}
