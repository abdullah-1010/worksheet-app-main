// components/SignInButton.tsx
"use client";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

const SignInButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      // Trigger Google Sign-In pop-up
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("User Info:", user);

      // Redirect to the form page (home page) after successful sign-in
      router.push("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Sign-in failed. Please try again.");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <SubmitButton isLoading={isLoading} onClick={handleGoogleSignIn}>
        Sign In with Google
      </SubmitButton>
    </div>
  );
};

export default SignInButton;
