import { currentUser, User } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  console.log(user);
  return (
    <div className="px -10 p-4">
      <h1>Welcome <span>{user?.firstName}{user?.lastName}</span></h1>
    </div>
  );
}
