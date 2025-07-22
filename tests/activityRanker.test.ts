import { rankActivities } from '../src/services/activityRanker';
import { Weather, ActivityType } from '../src/types';

test('ranks activities for cold weather', () => {
  const mockWeather: Weather = {
    temperature: 5,
    windSpeed: 5,
    description: 'cold',
  };
  const ranked = rankActivities(mockWeather);
  expect(ranked[0].activity).toBe(ActivityType.INDOOR_SIGHTSEEING);
});

test('ranks activities for warm, windy weather (surfing)', () => {
  const mockWeather: Weather = {
    temperature: 25,
    windSpeed: 15,
    description: 'warm and windy',
  };
  const ranked = rankActivities(mockWeather);
  expect(ranked[0].activity).toBe(ActivityType.SURFING);
});

test('ranks activities for warm, calm weather (outdoor sightseeing)', () => {
  const mockWeather: Weather = {
    temperature: 20,
    windSpeed: 5,
    description: 'warm',
  };
  const ranked = rankActivities(mockWeather);
  expect(ranked[0].activity).toBe(ActivityType.OUTDOOR_SIGHTSEEING);
});