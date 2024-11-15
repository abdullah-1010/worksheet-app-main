"use client";

import firebaseApp from "@/lib/firebaseConfig";
import { getAuth, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MForm from "@/components/forms/Form";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setIsClient(true);

    const auth = getAuth(firebaseApp);
    const currentUser = auth.currentUser;

    if (!currentUser) {
      router.push("/signin");
    } else {
      setUser(currentUser);
    }
  }, [router]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold"> Mathmate</span>
          </div>

          <MForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Mathmate
            </p>
            <Link href="/userprofile" className="text-blue-700">
              My Profile
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
