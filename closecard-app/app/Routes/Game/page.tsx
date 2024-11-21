import { currentUser  } from "@clerk/nextjs/server";
// import Footer from "@/components/Global/Footer";
import { Header } from "@/components/Global/Header";
import { SignIn } from "@/components/LandingPage/SignIn";
import GamePage from "@/components/Game/GamePage";
import UserList from "@/components/Game/userList";

export default async function Home() {
  const user = await currentUser ();

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header />
      <main className="flex justify-center px-4 p-4">
        {user ? (
          <div className="flex">
            <GamePage firstName={user.firstName} lastName={user.lastName} />
            <UserList firstName={user.firstName} lastName={user.lastName} />
          </div>
        ) : (
          <SignIn />
        )}
      </main>
    </div>
  );
}