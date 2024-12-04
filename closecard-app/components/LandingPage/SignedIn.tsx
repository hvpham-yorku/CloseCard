import React from 'react';
import { Button } from '../ui/button';
import { currentUser} from '@clerk/nextjs/server';
import Link from 'next/link';

const SignedIn = async () => {
  
  const user = await currentUser();

  return (
    <div className=" bg-blend-color rounded-3xl justify-center h-4/5">
      <div className='flex flex-col items-center justify-center h-screen p-4'>  
        <h1 className="text-7xl font-bold mb-4 justify-center"> Welcome </h1>
        <h1 className="text-4xl font-sans mb-4 ">{user?.firstName} {user?.lastName}</h1>
        <div className="mb-4">
          <p className="text-xl">To begin playing, choose one of the options below</p>
        </div>
        <div className="flex space-x-4 mb-4 h-1/4">
        {/*For the Demo a simple Implementation of the game hence the Start Game
        instead of rooom functionality*/}
          {/* <Button className='rounded-full bg-green-800 px-10 py-7 text-lg text-white'>
            <Link href="/CreateRoom">Create a Room </Link>
          </Button>
          <Button className='rounded-full bg-teal-700 px-10 py-7 text-lg text-white'>
            <Link href="/JoinRoom">Join a Room </Link>
          </Button> */}
          <Button className='rounded-full bg-teal-700 px-10 py-7 text-lg text-white'>
            <Link href="/Routes/Game">Start Game</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignedIn;