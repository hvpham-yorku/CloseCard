import React from 'react';
import { Button } from '../ui/button';
import { currentUser} from '@clerk/nextjs/server';

const SignedIn = async () => {
  const user = await currentUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.firstName} {user?.lastName}</h1>
      <div className="mb-4">
        <p className="text-xl">To begin playing, choose one of the options below</p>
      </div>
      <div className="flex space-x-4 mb-4 h-1/4">
        <Button variant="default" size="lg">Create a Game</Button>
        <Button variant="default" size="lg">Join a Game</Button>
      </div>
    </div>
  );
};

export default SignedIn;