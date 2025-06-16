import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CloudUpload } from "lucide-react";
import Navbar from "@/components/Navabar";

export default async function Dashboard(){
  const { userId } = await auth();
  const user = await currentUser();

  if(!userId) {
    redirect("/sign-in")
  }

   const serializedUser = user
    ? {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
        username: user.username,
        emailAddress: user.emailAddresses?.[0]?.emailAddress,
      }
    : null;

    return (
      <div className="min-h-screen flex flex-col bg-default-50" >
        <Navbar user={serializedUser}/>
      </div>
    )

}