import React from 'react'
import { Button } from '../ui/button'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignInButton, UserButton } from '@clerk/nextjs';

//make the below async
export const Header = async () => {
    const user =  await currentUser();
    //console.log(user);
    return (
    <div className='px-10 py-3 flex items-center justify-between bg-gray-800 border-white'>
        <h2 className='uppercase font-semibold text-4xl tracking-wide text-white'>
            CloseCard
        </h2>
        <ClerkLoaded>
            {user ? (
                <div>
                    <UserButton />
                </div>
            ) : (
                
                <SignInButton mode='modal'>
                    <Button className='px-10 bg-blue-900 rounded-2xl text-gray-400'>Sign In</Button>
                </SignInButton>
            )}
        </ClerkLoaded>
    </div>
    )
}
