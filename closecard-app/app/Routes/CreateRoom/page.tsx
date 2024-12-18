import { currentUser } from "@clerk/nextjs/server";
import Footer from "@/components/Global/Footer";
import {Header} from "@/components/Global/Header";
import {SignIn} from "@/components/LandingPage/SignIn";


export default async function Home() {
  const user = await currentUser ();

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header />
      <main className="flex justify-center px-4 p-4">
        {user ? (
          <h1 className="text-white text-5xl">
            Under Construction !!!!
          </h1>
        ) : (
          <SignIn />
        )}
      </main>
      <Footer />
    </div>
  );
}