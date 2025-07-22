# travel-api

A scalable, maintainable GraphQL API built with Node.js to support a travel planning application. This project integrates Open-Meteo's weather and geolocation APIs and ranks activities based on the weather forecast.

## Architecture Overview

- **GraphQL API**: Apollo Server with a modular schema for cities, weather, and activity ranking.
- **Resolvers**: Map GraphQL queries to service logic.
- **Services**: Handle external API calls (Open-Meteo) and business logic (activity ranking).
- **Types**: TypeScript types for strong typing and maintainability.
- **Testing**: Jest for unit and integration tests, with fetch mocked for service tests.

**Directory Structure:**
```
travel-api/
  src/
    resolvers/
      index.ts
      resolver.ts
    services/
      weatherService.ts
      activityRanker.ts
    schema/
      index.ts
      typeDefs.ts
    utils/
    types.ts
    index.ts
  tests/
    weatherService.test.ts
    activityRanker.test.ts
  package.json
  tsconfig.json
  README.md
```

## Technical Choices
- **Node.js + TypeScript**: For type safety and maintainability.
- **Apollo Server**: Modern, extensible GraphQL server.
- **Open-Meteo API**: Free, no-auth weather and geolocation data.
- **Jest**: For robust, fast testing.
- **node-fetch v2**: For compatibility with Jest and TypeScript.

## Omissions & Trade-offs
- No caching (e.g., Redis) to keep the demo simple.
- Minimal validation and error handling for brevity.
- No frontend; API only.
- City IDs are lat,lon strings due to Open-Meteo API limitations.

## Improvements & Extensions
- Add caching for city and weather data.
- More robust weather-to-activity mapping (e.g., consider precipitation, weather codes).
- Pagination and fuzzy search for city suggestions.
- More detailed weather and activity types.
- Add authentication and rate limiting.
- Use TypeGraphQL or Nexus for schema inference from TypeScript types.
- Dockerize for deployment.

## How to Run
1. Install dependencies:
   ```sh
   npm install
   npm install node-fetch@2
   ```
2. Start the server:
   ```sh
   npx ts-node src/index.ts
   ```
3. Visit [http://localhost:4000/](http://localhost:4000/) to use the GraphQL playground.

## How to Test
Run all tests:
```sh
npx jest
```

## How AI Was Used
- AI (ChatGPT) was used to design the schema, plan architecture, refactor code for best practices, and generate initial service and resolver logic. AI also suggested test cases and helped debug TypeScript/Jest/ESM compatibility issues. All code was reviewed and adapted for clarity and maintainability.