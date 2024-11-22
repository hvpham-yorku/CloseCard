Room Management API Documentation
Overview

A backend service for managing rooms, users, and messages using Express.js and MongoDB. 



Endpoints
POST /joinroom

Adds a user to a room.
Request Body:

{
  "roomId": "room123",
  "name": "John Doe",
  "email": "johndoe@example.com"
}

Response:

    200 OK: User added successfully.
    500 Internal Server Error: Error message.

POST /createroom

Creates a new room.
Request Body:

{
  "roomId": "room123",
  "owner": { "name": "John Doe", "email": "johndoe@example.com" }
}

Response:

    200 OK: Room created successfully.
    500 Internal Server Error: Error message.

POST /sendmessage

Sends a message to a room.
Request Body:

{
  "roomId": "room123",
  "senderName": "John Doe",
  "senderEmail": "johndoe@example.com",
  "message": "Hello, room!"
}

Response:

    200 OK: Message sent successfully.
    404 Not Found: Room not found.

DELETE /deleteroom

Deletes a room (owner only).
Request Body:

{
  "roomId": "room123",
  "ownerName": "John Doe",
  "ownerEmail": "johndoe@example.com"
}

Response:

    200 OK: Room deleted.
    403 Forbidden: Unauthorized action.
    404 Not Found: Room not found.

PUT /removeuser

Removes a user from a room.
Request Body:

{
  "roomId": "room123",
  "targetEmail": "user@example.com"
}

Response:

    200 OK: User removed.
    404 Not Found: Room not found.

GET /rooms/:id/users

Gets users in a room.
URL Parameter: id (room ID).
Response:

    200 OK: List of users.
    404 Not Found: Room not found.

GET /users

Gets all users in the system.
Response:

    200 OK: List of users.
    500 Internal Server Error: Error message.

Models
RoomUser

    name (string): User's name.
    email (string): User's email.
    roomId (string): Room ID.

Room

    roomId (string): Room identifier.
    owner (object): Name and email of the room owner


Error Codes

    200 OK: Request succeeded.
    400 Bad Request: Invalid input.
    403 Forbidden: Unauthorized action.
    404 Not Found: Resource not found.
    500 Internal Server Error: Server error.
