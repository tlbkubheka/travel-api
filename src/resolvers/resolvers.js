import { DEFAULT_CITY_LIMIT, FORECAST_DAYS } from '../config/api';
import { City } from '../models/City';
import { WeatherDay } from '../models/WeatherDay';

export const resolvers = {
  Query: {
    suggestCities: async (_, { query, limit }, { services }) => {
      return services.cityService.suggestCities(
        query,
        limit || DEFAULT_CITY_LIMIT
      );
    },
    getWeather: async (_, { cityId }, { services, loaders }) => {
      const city = await loaders.cityLoader.load(cityId);
      const forecast = await services.weatherService.getForecast(
        city.coordinates,
        FORECAST_DAYS
      );
      return forecast.map(day => new WeatherDay(day));
    },
    rankActivities: async (_, { cityId }, { services, loaders }) => {
      const city = await loaders.cityLoader.load(cityId);
      const forecast = await services.weatherService.getForecast(
        city.coordinates,
        FORECAST_DAYS
      );
      return services.activityService.rankActivities(forecast);
    }
  },
  City: {
    coordinates: (city) => city.coordinates
  }
};