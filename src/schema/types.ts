import {gql} from 'apollo-server-express';

export const typeDefs = gql `
type Coordinates {
    lat: Float!
    lon: Float!
  }

  type City {
    id: ID!
    name: String!
    country: String!
    coordinates: Coordinates!
  }

  type WeatherDay {
    date: String!
    maxTemp: Float!
    minTemp: Float!
    weatherCode: Int!
    condition: String!
  }

  type ActivityScore {
    activity: String!
    score: Float!
    suitability: String!
  }

  type Query {
    suggestCities(query: String!, limit: Int): [City!]!
    getWeather(cityId: ID!): [WeatherDay!]!
    rankActivities(cityId: ID!): [ActivityScore!]!
  }
`;
