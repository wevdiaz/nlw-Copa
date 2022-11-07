import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const data = {
  id: "Xw4dSp002",
  email: "yoko.lithos@teste.com.br",
  name: "Yoko Tzukini",
  picture: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  team: "Santos",
  age: 25,
  city: "SP"
}


export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/users", async (request) => {
    // const createUserBody = z.object({
    //   access_token: z.string(),
    // });

    // const { access_token } = createUserBody.parse(request.body);

    // const userResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${access_token}`,
    //   }
    // });

    // const userData = await userResponse.json();
    
    const userData = data
    
    const userInfoSchema = z.object({
      id: z.string(),
      email: z.string().email(),
      name: z.string(),
      picture: z.string().url(),
    });

    const userInfo = userInfoSchema.parse(userData);

    return { userInfo }    

  });  
}