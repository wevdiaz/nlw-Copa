import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";


import { poolRoute } from "../src/routes/pool";
import { userRoute } from "../src/routes/user";
import { guessRoute } from "../src/routes/guess";
import { authRoutes } from "../src/routes/auth";
import { gameRoute } from "../src/routes/game";


async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  // ATENÇÂO -> Precisa está em variável ambiente quando colocado em produção [ ! ATENÇÂO ! ]
  await fastify.register(jwt, {
    secret: "NLWcopaW87",
  });
  

  await fastify.register(poolRoute);
  await fastify.register(userRoute); 
  await fastify.register(guessRoute); 
  await fastify.register(authRoutes);
  await fastify.register(gameRoute);

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();