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
    } | null;
    id: string;
  }[];
}

const pusher_key = process.env.NEXT_PUBLIC_PUSHER_KEY as string;

export function Chat({ data }: ChatProps) {
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
    <div className="p-6 flex-grow max-h-screen overflow-y-auto py-32">
      <div className="flex flex-col gap-4">
        {totalMessages.map((message, index) => (
          <div key={index}>
            <div className="flex items-center">
              <Image
                src={message.User?.image as string}
                alt="profile picture of a user"
                className="w-12 h-12 object-cover rounded-lg mr-4"
                width={50}
                height={50}
              />
              <div className="rounded-lg bg-white p-4 shadow-md self-start">{message.message}</div>
            </div>

            <p className="font-light text-xs text-gray-600">{message.User?.name}</p>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
    </div>
  );
}
