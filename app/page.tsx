// import PatientForm from "@/components/forms/PatientForm";
// import PassKeyModal from "@/components/PassKeyModal";
import MForm from "@/components/forms/Form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            {/* <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link> */}
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
