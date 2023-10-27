import GithubProvider from 'next-auth/providers/github';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/db';

import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};
