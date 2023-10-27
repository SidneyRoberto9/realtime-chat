'use client';

import { useState, useRef, useEffect } from 'react';
import Pusher from 'pusher-js';
import Image from 'next/image';

interface ChatProps {
  data: {
    message: string;
    User: {
      name: string | null;
      image: string | null;
      email: string | null;
    } | null;
    id: string;
  }[];
  email: string;
}

const pusher_key = process.env.NEXT_PUBLIC_PUSHER_KEY as string;

export function Chat({ data, email }: ChatProps) {
  const [totalMessages, setTotalMessages] = useState(data);
  const messageEndRef = useRef<HTMLInputElement>(null);

  function scrollToBottom() {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const pusher = new Pusher(pusher_key, {
      cluster: 'sa1',
    });

    const channel = pusher.subscribe('chat');

    channel.bind('message', function (data: { message: string }) {
      const parsedMessages = JSON.parse(data.message);

      setTotalMessages((prev) => [...prev, parsedMessages]);
    });

    return () => {
      pusher.unsubscribe('chat');
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [totalMessages]);

  return (
    <div className="p-6 flex-grow max-h-screen overflow-y-auto py-28 scrollbar-thin">
      <div className="flex flex-col gap-4">
        {totalMessages.map((message, index) => (
          <div key={index}>
            {email === message.User?.email ? (
              <div className="flex justify-end items-center">
                <div className="rounded-lg bg-dark-blue-second p-2 shadow-md self-start text-sm text-zinc-100 ring-zinc-500">
                  {message.message}
                </div>
                <Image
                  src={message.User?.image as string}
                  alt="profile picture of a user"
                  className="w-12 h-12 object-cover rounded-full shadow ml-4"
                  width={50}
                  height={50}
                />
              </div>
            ) : (
              <div className="flex items-center">
                <Image
                  src={message.User?.image as string}
                  alt="profile picture of a user"
                  className="w-12 h-12 object-cover rounded-full shadow mr-4"
                  width={50}
                  height={50}
                />
                <div className="rounded-lg bg-dark-blue-second p-2 shadow-md self-start text-sm text-zinc-100 ring-zinc-500">
                  {message.message}
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
    </div>
  );
}
