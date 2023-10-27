import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { getMessages } from '@/lib/functions';
import { authOptions } from '@/lib/auth';
import { Header } from '@/components/Header';
import { Form } from '@/components/Form';
import { Chat } from '@/components/Chat';

export const dynamic = 'force-dynamic';

export default async function page() {
  const session = await getServerSession(authOptions);
  const data = await getMessages();

  console.log(data);
  console.log(session);

  if (!session) {
    redirect('/');
  }

  return (
    <div className="h-screen bg-dark-blue-primary flex flex-col">
      <Header />
      <Chat data={data} email={session!.user?.email as string} />
      <Form />
    </div>
  );
}
