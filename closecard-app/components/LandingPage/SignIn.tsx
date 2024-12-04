// a component for clients to sign in where u clicks signin button to sign in 
import React from 'react'
import { Button } from '../ui/button'
import { SignInButton } from '@clerk/nextjs';

export const SignIn = () => {
  return (
    <div className=""> 
      <div className='flex flex-col items-center text-center justify-center h-screen p-4'> 
        <div>
          <h1 className="text-7xl font-bold mb-4 justify-center text-blue-600">
            Welcome to Our App 
          </h1>
        </div>
        <h1 className="text-5xl font-bold mb-4 mt-2 justify-center text-slate-600">
        Please sign in to access the CloseCard app 
        </h1>
        <SignInButton mode='modal'>
            <Button 
              variant="ghost" 
              className='px-16 py-9 mt-8 text-4xl text-center rounded-2xl text-slate-300 bg-blue-900'
            >
              Sign In
            </Button>
        </SignInButton>   
      </div> 
    </div>
  )
}