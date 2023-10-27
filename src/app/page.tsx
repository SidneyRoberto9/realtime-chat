import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';
import { Login } from '@/components/Login';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/chat');
  }

  return (
    <div className="h-screen w-screen bg-violet-500">
      <div className="h-screen w-screen m-0 bg-primary table-cell align-middle ">
        <div className="w-1/2 max-w-sm mx-[25%] my-0 text-gray-400">
          <div className="text-4xl font-bold pb-3">Welcome 👋</div>
          <div className="text-lg mb-6">Choose your login method and let's get started</div>
          <div className="flex flex-col gap-4">
            <Login type="github" />
            <Login type="discord" />
          </div>
        </div>
      </div>
    </div>
  );
}
