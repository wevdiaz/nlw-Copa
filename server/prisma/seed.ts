import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Yoko Lithos",
      email: "yokolithos@teste.com.br",
      avatarUrl: "https://i.pinimg.com/236x/44/a7/45/44a745b6ad6c95568545169039efb7f3--popeye-olive-oyl-lemon-essential-oils.jpg",
    }
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Exemplo de Bolão",
      code: "BOL123",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id
        }
      }
    }
  });

  await prisma.game.create({
    data: {
      date: '2022-11-02T12:00:00.116Z',
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    }
  });

  await prisma.game.create({
    data: {
      date: '2022-11-04T12:00:00.116Z',
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",

      guesses: {
        create: {
          firstTeamPoints: 3,
          secondTeamPoints: 1,

          partipant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
      }
    }
  })
}

main();