'use client';

import { BsGithub, BsDiscord } from 'react-icons/Bs';
import { signIn } from 'next-auth/react';

interface LoginProps {
  type: 'github' | 'discord';
}

export function Login({ type }: LoginProps) {
  if (type === 'github') {
    return (
      <button
        type="button"
        onClick={() => signIn('github')}
        className="w-full h-14 font-light text-white bg-slate-900 border-none outline-none rounded-lg cursor-pointer transition-all duration-300 hover: brightness-150 flex items-center justify-center gap-2 text-lg">
        <span className="font-light">GitHub</span>
        <BsGithub />
      </button>
    );
  } else if (type === 'discord') {
    return (
      <button
        type="button"
        onClick={() => signIn('discord')}
        className="w-full h-14 font-light text-white bg-discord border-none outline-none rounded-lg cursor-pointer transition-all duration-300 hover: brightness-150 flex items-center justify-center gap-2 text-lg">
        <span className="font-light">Google</span>
        <BsDiscord />
      </button>
    );
  }
}
