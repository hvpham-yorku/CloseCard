"use client";
import React, { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface UserListProps {
  users: User[]; // Define the expected shape of props
}

export default function UserList({ users }: UserListProps) {

  return (
    <div className='w-full md:w-1/4 h-[calc(100vh-110px)] px-5 absolute right-1 py-4 rounded-xl 
            border-2 border-gray-800 border-l-4 pl-4 overflow-y-auto'
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Users</h2>
      <ul className='space-y-2 text-xl text-center'>
        {users.map(user => (
          <li key={user.email} className='bg-gray-800 pr-4 pl-4 rounded-lg py-3.5 text-2xl font-bold text-gray-100 hover:bg-gray-900 transition-colors'>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

