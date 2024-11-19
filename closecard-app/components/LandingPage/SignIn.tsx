// a component for clients to sign in where u clicks signin button to sign in 
import React from 'react'
import { Button } from '../ui/button'
import { SignInButton } from '@clerk/nextjs';

export const SignIn = () => {
  return (
    <div className=" bg-slate-900 bg-blend-color rounded-3xl justify-center h-4/5">
      <div className='flex flex-col items-center text-center justify-center h-screen p-4'> 
        <div>
          <h1 className="text-7xl font-bold mb-4 justify-center text-blue-600">
            Welcome to Our App 
          </h1>
        </div>
        <h1 className="text-7xl font-bold mb-4 justify-center text-slate-600 text-white">
        Please sign in to access the CloseCard app 
        </h1>
        <SignInButton mode='modal'>
            <Button 
              variant="ghost" 
              className='px-16 py-9 mt-8 text-5xl text-center rounded-2xl border bg-teal-300'
            >
              Sign In
            </Button>
        </SignInButton>   
      </div> 
    </div>
  )
}