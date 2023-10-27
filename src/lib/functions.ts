import { prisma } from '@/lib/db';

export async function getMessages() {
  return await prisma.message.findMany({
    select: {
      message: true,
      id: true,
      User: {
        select: {
          email: true,
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: 'asc',
    },
    take: 50,
  });
}
