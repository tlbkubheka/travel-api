import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from 'type-graphql';
import { resolvers } from "./resolvers/index";

async function startServer() {
  const schema = await buildSchema({
    resolvers,
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(process.env.PORT) || 4000 },
  });

  console.log(`Server ready at ${url}`);
}

startServer().catch((error) => {
  console.error("Failed to start the server:", error);
});