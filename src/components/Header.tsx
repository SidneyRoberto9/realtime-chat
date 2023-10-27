import Image from 'next/image';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';
import { Logout } from '@/components/Logout';
import { Login } from '@/components/Login';

export async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex px-10 py-5 justify-between fixed top-0 left-0 w-full bg-white">
      <h1 className="text-black text-3xl font-bold">
        RealTime<span className="text-teal-500">Chat</span>
      </h1>

      {session ? (
        <div className="flex items-center">
          <Image
            src={session.user?.image as string}
            alt="profile picture"
            className="w-12 h12 rounded-full mr-3"
            width={50}
            height={50}
          />
          <Logout />
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
