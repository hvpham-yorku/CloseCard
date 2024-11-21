'use client'

import React from 'react';
import { Button } from '../ui/button';

interface GamePageProps {
  firstName: string | null;
  lastName: string | null;
}

export default function GamePage({ firstName, lastName }: GamePageProps) {
  // const handleButtonClick = () => {
  //   const randomNumber = Math.floor(Math.random() * 100) + 1;
  //   alert(`Generated Number: ${randomNumber}`);
  // };

  return (
    <div className="game-page">
      <div className="w-3/4 h-full bg-red-900 fixed left-0">

        <h1 className="text-4xl flex-row justify-center items-center text-white">Welcome to the Game Page</h1>
        {/* <Button onClick={handleButtonClick} className="m-auto">
          Generate Random Number
        </Button> */}

      </div>
      <div className='w-1/4 h-full fixed right-0 bg-green-900 border-l-8'>
        <h1 className="text-4xl flex-row justify-center items-center text-white">Users</h1>
      </div>
  </div>
  );
}