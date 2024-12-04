import { currentUser } from "@clerk/nextjs/server";
import Footer from "@/components/Global/Footer";
import { Header } from "@/components/Global/Header";
import { SignIn } from "@/components/LandingPage/SignIn";
import Room from "@/models/roomModel"; // Import Room model
import RoomUser from "@/models/roomUsersModel"; // Import RoomUser model
import RoomMsg from "@/models/roomMsgModel"; // Import RoomMsg model
import mongoose from "mongoose"; // Mongoose for MongoDB interaction

export default async function Home() {
  // Check if the user is authenticated
  const user = await currentUser().catch((error) => {
    console.error("Error fetching current user:", error);
    return null;
  });

  // If the user is authenticated, proceed with room creation
  if (user) {
    // Create room logic
    const { room_id, creator_name, creator_email } = { 
      room_id: "123", // example room ID, can be dynamic
      creator_name: user.firstName || "Unknown", 
      creator_email: user.email || "Unknown"
    };

    try {
      // Create a new room
      const newRoom = new Room({
        room_id,
        creator_name,
        creator_email,
      });

      // Save the room to the database
      await newRoom.save();

      // Add the creator to the RoomUser model
      const roomUser = new RoomUser({
        room_id,
        user_name: creator_name,
        user_email: creator_email,
      });

      await roomUser.save();

      // Optionally, create a welcome message in the room
      const welcomeMessage = new RoomMsg({
        room_id,
        sender_name: creator_name,
        sender_email: creator_email,
        msg: "Welcome to the room!",
      });

      await welcomeMessage.save();
    } catch (error) {
      console.error("Error creating room:", error);
    }

    return (
      <div className="flex flex-col min-h-screen bg-gray-800">
        <Header />
        <main className="flex justify-center px-4 p-4">
          <h1 className="text-white text-5xl">Room Created Successfully!</h1>
        </main>
        <Footer />
      </div>
    );
  }

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
