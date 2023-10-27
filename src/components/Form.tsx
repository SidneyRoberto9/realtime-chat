'use client';

import { TbSend } from 'react-icons/tb';
import { useState, useRef } from 'react';

import { postData } from '@/app/action';

export function Form() {
  const [value, setValue] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-dark-blue-primary">
      <form
        ref={formRef}
        action={async (formData) => {
          await postData(formData);
          formRef.current?.reset();
        }}
        className="p-4 w-full ">
        <div className="flex relative ">
          <input
            type="text"
            name="message"
            placeholder="Type your message..."
            className="flex-grow py-4 px-8 outline-none rounded-full text-black"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            disabled={value.length <= 1}
            type="submit"
            className="absolute top-0 right-0 mt-2 mr-2
          bg-violet-400 hover:bg-violet-500 text-white py-2 px-5 rounded-full flex items-center justify-center disabled:bg-violet-900">
            <TbSend size={26} />
          </button>
        </div>
      </form>
    </div>
  );
}
