import { gql } from 'apollo-server';

export const typeDefs = gql`
  type City {
    id: ID!
    name: String!
    country: String!
    latitude: Float!
    longitude: Float!
  }

  type Weather {
    temperature: Float!
    description: String!
    icon: String
    windSpeed: Float
    precipitation: Float
  }

  enum ActivityType {
    SKIING
    SURFING
    INDOOR_SIGHTSEEING
    OUTDOOR_SIGHTSEEING
  }

  type ActivityRanking {
    activity: ActivityType!
    score: Float!
    reason: String
  }

  type Query {
    suggestCities(input: String!): [City!]!
    weather(cityId: ID!): Weather!
    activityRanking(cityId: ID!): [ActivityRanking!]!
  }
`;