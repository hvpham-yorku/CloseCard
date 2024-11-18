import { currentUser } from "@clerk/nextjs/server";
import Footer from "@/components/Global/Footer";
import {Header} from "@/components/Global/Header";
import {SignIn} from "@/components/LandingPage/SignIn";

export default async function Home() {
  const user = await currentUser ();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center px-4 p-4">
        {user ? (
          <h1>
            Welcome <span>{user.firstName} {user.lastName}</span>
          </h1>
        ) : (
          <SignIn />
        )}
      </main>
      <Footer />
    </div>
  );
}