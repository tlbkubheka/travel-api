import { Weather } from '../types';

export function rankActivities(weather: Weather) {
  const { temperature, windSpeed } = weather;

  const rankings = [
    { activity: 'Skiing', score: temperature < 0 ? 10 : 1 },
    { activity: 'Surfing', score: temperature > 20 && windSpeed > 10 ? 9 : 3 },
    { activity: 'Indoor sightseeing', score: temperature < 10 ? 8 : 4 },
    { activity: 'Outdoor sightseeing', score: temperature >= 15 ? 9 : 2 },
  ];

  return rankings.sort((a, b) => b.score - a.score);
}