import { currentUser } from "@clerk/nextjs/server";
import Footer from "@/components/Global/Footer";
import {Header} from "@/components/Global/Header";
import {SignIn} from "@/components/LandingPage/SignIn";
import RoomUser from "@/models/roomUsersModel";
import Room from "@/models/roomModel";
import mongoose from "mongoose";

export default async function Home() {
  // Get the current user from Clerk
  const user = await currentUser().catch((error) => {
    console.error("Error fetching current user:", error);
    return null;
  });

  // If the user is not logged in, show the SignIn page
  if (!user) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-800">
        <Header />
        <main className="flex justify-center px-4 p-4">
          <SignIn />
        </main>
        <Footer />
      </div>
    );
  }

  // If user is logged in, join the room
  const { room_id, user_name, user_email } = req.body; // Extract room info from the request

  // Validate input (Make sure room_id, user_name, and user_email are provided)
  if (!room_id || !user_name || !user_email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if the room exists in the database
  const room = await Room.findOne({ room_id });
  if (!room) {
    return res.status(404).json({ message: "Room not found" });
  }

  // Add the user to the RoomUser model (indicating they have joined the room)
  const newRoomUser = new RoomUser({
    room_id,
    user_name,
    user_email,
  });

  // Save the new room user to the database
  await newRoomUser.save();

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header />
      <main className="flex justify-center px-4 p-4">
        <h1 className="text-white text-5xl">
          You have successfully joined the room!
        </h1>
      </main>
      <Footer />
    </div>
  );
}
