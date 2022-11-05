import Fastify from "fastify";
import cors from "@fastify/cors";


import { poolRoute } from "../src/routes/pool";
import { userRoute } from "../src/routes/user";
import { guessRoute } from "../src/routes/guess";


async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(poolRoute);
  await fastify.register(userRoute); 
  await fastify.register(guessRoute); 

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();