import { getCitySuggestions, getWeatherForecast } from '../services/weatherService';
import { rankActivities } from '../services/activityRanker';

export const resolvers = {
  Query: {
    suggestCities: async (_: any, { query }: { query: string }) => {
      return await getCitySuggestions(query);
    },
    getWeatherForecast: async (_: any, { city }: { city: string }) => {
      return await getWeatherForecast(city);
    },
    getActivityRanking: async (_: any, { city }: { city: string }) => {
      const weatherData = await getWeatherForecast(city);

      // Assume you're only interested in the first day's forecast for simplicity
      const todayForecast = weatherData.daily[0];

      return {
        city: weatherData.city,
        date: todayForecast.date,
        rankings: rankActivities(todayForecast)
      };
    }
  }
};