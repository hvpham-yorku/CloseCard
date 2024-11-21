'use client'

import React from 'react';
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
    <div className="bg-gray-400 bg-blend-color rounded-3xl justify-center h-4/5">
      <div className='flex flex-col items-center justify-center h-screen p-4'>  
        <h1 className="text-7xl font-bold mb-4 justify-center">Welcome</h1>
        <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
          <p className="text-xl font-semibold">{`${firstName} ${lastName}`}</p>
        </div>
        <div className="mb-4">
          <Button onClick={handleButtonClick} className='rounded-full bg-green-800 px-10 py-7 text-3xl text-white'>
            Generate Number
          </Button>
        </div>
      </div>
    </div>
  );
}