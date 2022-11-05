import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function guessRoute(fastify: FastifyInstance) {
  fastify.get("/guesses/count", async () => {
    const guesses = await prisma.guess.count();

    return { guesses }
  });
}