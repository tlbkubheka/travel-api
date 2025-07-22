import { getWeatherForecast, getCitySuggestions } from '../services/weatherService';
import { rankActivities } from '../services/activityRanker';

export const resolvers = {
  Query: {
    suggestCities: async (_: any, { input }: { input: string }) => {
      return await getCitySuggestions(input);
    },
    weather: async (_: any, { cityId }: { cityId: string }) => {
      return await getWeatherForecast(cityId);
    },
    activityRanking: async (_: any, { cityId }: { cityId: string }) => {
      const forecast = await getWeatherForecast(cityId);
      return rankActivities(forecast);
    },
  },
};
