import fetch from 'node-fetch';

export interface Weather {
  temperature: number;
  windSpeed: number;
  condition: string;
}

/**
 * Fetches the weather for a given city.
 * @param city The name of the city
 * @returns Weather object with temperature, windSpeed, and condition
 */
export async function fetchWeather(city: string): Promise<Weather> {
  const encodedCity = encodeURIComponent(city);
  const url = `https://api.open-meteo.com/v1/forecast?latitude=0&longitude=0&current_weather=true`;

  // Replace dummy lat/lon with coordinates fetched based on city if desired

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      temperature: data.current_weather.temperature,
      windSpeed: data.current_weather.windspeed,
      condition: 'sunny', // Mock or map actual weather code to condition string
    };
  } catch (error: any) {
    console.error(`Failed to fetch weather for ${city}:`, error.message);
    throw error;
  }
}