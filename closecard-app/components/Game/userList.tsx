import React from 'react';

interface UserListProps {
    firstName: string | null;
    lastName: string | null;
}

export default function UserList({ firstName, lastName }: UserListProps) {
    return (
        <div 
            className='w-1/4 h-screen py-4 absolute right-0 bg-blue-200 
            rounded-xl border-l-4 border-gray-700 pl-4 overflow-y-auto'
        >
            <h1 className="text-4xl flex-row text-center justify-center items-center text-black" style={{ fontSize: '2rem' }}>Users</h1>
            <div className='items-center bg-gray-400 rounded-xl flex-auto font-semibold border-gray-700'>
                <p className="text-2xl text-center" style={{ fontSize: '1.5rem' }}>{firstName} {lastName}</p>
            </div>
        </div>
    );
}