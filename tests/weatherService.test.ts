import { getCitySuggestions, getWeatherForecast } from '../src/services/weatherService';
import { City, Weather } from '../src/types';
import fetch from 'node-fetch';

jest.mock('node-fetch');
const { Response } = jest.requireActual('node-fetch');

describe('getCitySuggestions', () => {
  it('returns city suggestions with correct structure', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
      new Response(JSON.stringify({
        results: [
          { name: 'London', latitude: 51.5, longitude: -0.1, country: 'UK' },
          { name: 'Paris', latitude: 48.8, longitude: 2.3, country: 'France' },
        ],
      }))
    );
    const cities = await getCitySuggestions('Lon');
    expect(cities).toEqual([
      { id: '51.5,-0.1', name: 'London', latitude: 51.5, longitude: -0.1, country: 'UK' },
      { id: '48.8,2.3', name: 'Paris', latitude: 48.8, longitude: 2.3, country: 'France' },
    ]);
  });
});

describe('getWeatherForecast', () => {
  it('returns weather for a cityId', async () => {
    // First, mock getCityById (called inside getWeatherForecast)
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
      new Response(JSON.stringify({ current_weather: { temperature: 20, weathercode: 1, windspeed: 10 } }))
    );
    const weather = await getWeatherForecast('51.5,-0.1');
    expect(weather).toEqual({
      temperature: 20,
      description: 'Weather code 1',
      icon: undefined,
      windSpeed: 10,
      precipitation: undefined,
    });
  });
}); 