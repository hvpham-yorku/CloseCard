import React from 'react';
import { Button } from '../ui/button';
import { currentUser } from '@clerk/nextjs/server';
import { ClerkLoaded, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

// Make the Header component async
export const Header = async () => {
    const user = await currentUser();
    return (
        <header className='px-6 py-4 flex items-center justify-between bg-gray-800 bg-opacity-30 border-b-4 border-l-2 border-gray-700'>
            <h1 className='text-2xl md:text-4xl font-bold tracking-wide text-white'>
                <Link href="/">CloseCard</Link>
            </h1>
            <ClerkLoaded>
                <div className='flex items-center space-x-4'>
                    <ModeToggle />
                    {user ? (
                        <UserButton />
                    ) : (
                        <SignInButton mode='modal'>
                            <Button className='px-4 md:px-10 bg-blue-900 rounded-2xl text-gray-400'>
                                Sign In
                            </Button>
                        </SignInButton>
                    )}
                </div>
            </ClerkLoaded>
        </header>
    );
};