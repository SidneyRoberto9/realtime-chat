import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { getMessages } from '@/lib/functions';
import { authOptions } from '@/lib/auth';
import { Form } from '@/components/Form';
import { Chat } from '@/components/Chat';

export const dynamic = 'force-dynamic';

export default async function page() {
  const session = await getServerSession(authOptions);
  const data = await getMessages();

  if (!session) {
    redirect('/');
  }

  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      <Chat data={data} />
      <Form />
    </div>
  );
}
