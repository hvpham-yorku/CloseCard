import { currentUser } from "@clerk/nextjs/server";
import { Header } from "@/components/Global/Header";
import { SignIn } from "@/components/LandingPage/SignIn";
import GamePage from "@/components/Game/GamePage";
import UserList from "@/components/Game/userList";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col flex-grow justify-center px-4 p-4">
        {user ? (
          <div className="flex flex-grow">
            <GamePage fullName={user.fullName || ""} email={user.emailAddresses[0].emailAddress} />
          </div>
        ) : (
          <SignIn />
        )}
      </main>
    </div>
  );
}
