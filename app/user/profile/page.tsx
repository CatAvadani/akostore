import { auth } from "@/auth";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import ProfileForm from "./profileForm";

export const metadata: Metadata = {
  title: "Customer profile",
};

const ProfilePage = async () => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className=" max-w-md mx-auto space-y-4 ">
        <h2 className=" h3-bold ">Profile</h2>
        <ProfileForm />
      </div>
    </SessionProvider>
  );
};

export default ProfilePage;
