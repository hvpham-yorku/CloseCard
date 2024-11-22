"use client";

import React, { useState } from 'react';

const JoinRoom = () => {
    const [roomCode, setRoomCode] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleJoinRoom = async () => {
        try {
            const response = await fetch('http://localhost:3000/joinroom', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roomCode, username }),
            });

            if (response.ok) {
                setSuccess('Successfully joined the room!');
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Failed to join room.');
            }
        } catch (err) {
            setError('An error occurred while joining the room.');
        }
    };

    return (
        <div>
            <h1>Join a Room</h1>
            <input
                type="text"
                placeholder="Enter room code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleJoinRoom}>Join Room</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default JoinRoom;
