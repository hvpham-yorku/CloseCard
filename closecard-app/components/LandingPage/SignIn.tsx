// a component for clients to sign in where u clicks signin button to sign in 
import React from 'react'
import { Button } from '../ui/button'
import { SignInButton } from '@clerk/nextjs';

export const SignIn = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='mb-4'>
        Please sign in to access the CloseCard app 
      </h1>
        <SignInButton mode='modal'>
					{/* {increase button size} */}
            <Button className='px-10 rounded-sm'>Sign In</Button>
        </SignInButton>    
    </div>
  )
}