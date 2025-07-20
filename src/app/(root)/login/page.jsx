"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { doPatientLogin, doDoctorLogin } from "@/app/actions";
import PasswordField from "@/components/InputField/PasswordField";
import PhoneField from "@/components/InputField/PhoneField";
import SubmitButton from "@/components/InputField/SubmitButton";
import { signIn } from "next-auth/react";

function Page() {
  const router = useRouter();
  const [loginPassword, setLoginPassword] = useState("");
  const [loginPhone, setLoginPhone] = useState("");
  const [userType, setUserType] = useState("patient");
  const [error, setError] = useState("");

  const handleUserType = () => {
    setUserType((prev) => (prev === "patient" ? "doctor" : "patient"));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const result = await signIn("credentials", {
      redirect: false,
      phone: loginPhone,
      password: loginPassword,
      role: userType, // pass role too
    });

    if (result.error) {
      setError(result.error);
    } else if (result.ok) {
      // Successful login
      router.push(
        userType === "patient" ? "/patient-dashboard" : "/doctor-dashboard"
      );
    }
  };

  return (
    <div className="my-10">
      <button
        className="bg-[#162D3A] text-white px-5 py-2 rounded absolute right-20 cursor-pointer"
        onClick={handleUserType}
      >
        Login as a {userType === "patient" ? "doctor" : "patient"}
      </button>
      <div
        className="md:w-1/2 lg:w-1/3 mx-auto bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url("https://i.ibb.co/yFmhhzBg/Art-2.png")`,
        }}
      >
        <div className="w-full h-full bg-[#000000d3] p-10">
          <div className="flex flex-col gap-2 mb-5">
            <h2 className="text-xl md:text-3xl font-semibold text-white">
              Login as a {userType === "patient" ? "Patient" : "Doctor"}.
            </h2>
            <span className="text-sm md:text-base text-gray-400">
              {userType === "patient"
                ? "Manage your healthcare anytime, anywhere."
                : "Manage your appointments and patients."}
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mb-5">
              <PhoneField value={loginPhone} setValue={setLoginPhone} />
              <PasswordField
                value={loginPassword}
                setValue={setLoginPassword}
              />
            </div>

            <SubmitButton value={"Login"} />
            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
          </form>

          {userType === "patient" && (
            <div className="flex justify-between text-xs mt-5">
              <p className=" text-gray-300">
                Don’t have an account?
                <Link
                  href="/register"
                  className="text-[#1976D2] hover:underline ml-1"
                >
                  Register Now
                </Link>
              </p>
              <Link
                href="/forget-password"
                className="text-[#1976D2] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
