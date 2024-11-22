"use client";

import React, { useState } from 'react';

const CreateRoom = () => {
    const [roomName, setRoomName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleCreateRoom = async () => {
        try {
            const response = await fetch('http://localhost:3000/createroom', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roomName }),
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess(`Room created successfully! Room code: ${data.roomCode}`);
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Failed to create room.');
            }
        } catch (err) {
            setError('An error occurred while creating the room.');
        }
    };

    return (
        <div>
            <h1>Create a Room</h1>
            <input
                type="text"
                placeholder="Enter room name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
            />
            <button onClick={handleCreateRoom}>Create Room</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default CreateRoom;
