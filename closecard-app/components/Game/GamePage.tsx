'use client'

import React from 'react';
import { AvatarIcon, PaperPlaneIcon } from '@radix-ui/react-icons'; // Ensure you have installed radix-ui icons
import { Button } from '../ui/button';

interface GamePageProps {
  firstName: string | null;
  lastName: string | null;
}

export default function GamePage({ firstName, lastName }: GamePageProps) {
  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    alert(`Generated Number: ${randomNumber}`);
  };

  return (
    <div 
      className="w-3/4 h-screen absolute left-0 bg-slate-500 
      py-4 rounded-xl border-r-4 border-gray-700 pr-4 overflow-y-auto"
    >
      <h1 
        className="text-4xl flex-row justify-center
          items-center text-white text-center"
      > 
        Welcome to the Game Page
      </h1>

      {/* Input Box with Icons manual */}
      <div className="fixed bottom-0 left-0 w-full px-4 pb-4">
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <AvatarIcon className="w-5 h-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="block w-full pl-10 pr-12 py-2 text-gray-900 placeholder-gray-500 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Button onClick={handleButtonClick} className="bg-blue-500 text-white rounded-full p-2">
              <PaperPlaneIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}