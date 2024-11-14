import React from 'react'
import { Button } from './ui/button'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';

//make the below async
export const Header = async () => {
    const user =  await currentUser();
    //console.log(user);
    return (
    <div className='px-10 py-3 flex items-center justify-between border-b border-b-gray-300'>
        <h2 className='uppercase font-semibold text-lg tracking-wide'>
            CloseCard
        </h2>
        <ClerkLoaded>
            {user ? (
                <div>
                    <UserButton />
                </div>
            ) : (
                
                <SignInButton mode='modal'>
                    <Button className='px-10'>Sign In</Button>
                </SignInButton>
            )}
        </ClerkLoaded>
    </div>
    )
}
