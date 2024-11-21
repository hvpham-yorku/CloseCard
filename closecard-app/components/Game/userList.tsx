import React from 'react';

interface User {
  id: number;
  name: string;
}

export default function UserList() {
  // Placeholder users
  const users: User[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`
  }));

  return (
    <div className='w-full md:w-1/4 h-screen py-4 bg-gray-800 rounded-xl border-l border-gray-700 pl-4 overflow-y-auto'>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">Users</h2>
      <ul className='space-y-2'>
        {users.map(user => (
          <li key={user.id} className='bg-gray-700 rounded-lg p-3 text-gray-100 hover:bg-gray-600 transition-colors'>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

