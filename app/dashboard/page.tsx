"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const { user } = session;

  return (
    <div>
      <h1>Selamat datang, {user?.name}!</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Dashboard;
