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
    <div className='w-full md:w-1/4 h-[calc(100vh-110px)] px-5 absolute right-1 py-4 rounded-xl 
            border-2 border-gray-800 border-l-4 pl-4 overflow-y-auto'
    >
      <h2 className="text-4xl font-bold mb-4 text-center text-gray-100">Users</h2>
      <ul className='space-y-2 text-xl text-center'>
        {users.map(user => (
          <li key={user.id} className='bg-gray-800 pr-4 pl-4 rounded-lg py-3.5 text-xl font-bold text-gray-100 hover:bg-gray-900 transition-colors'>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

