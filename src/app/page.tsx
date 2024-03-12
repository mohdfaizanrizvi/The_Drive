"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";


export default function Home() {

  const createFile = useMutation(api.files.createFile)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Hello</Button>
      <Button onClick={() => {
        createFile({
          name: "Hello buddy",
        })
        }}>
          Click Me</Button>
      <SignInButton mode="modal">SignIn</SignInButton>
    </main>
  );
}
