import { doGoogleLogin } from "@/app/actions";
import Image from "next/image";
import google from "@/media/images/login/google.png";
import React from "react";
function GoogleLogin() {
  return (
    <form action={doGoogleLogin}>
      <button
        type="submit"
        name="action"
        value="google"
        className="w-full flex items-center justify-center gap-4 md:gap-6 border border-gray-400 bg-[#F3F9FA] rounded-lg py-2 md:py-3 cursor-pointer"
      >
        <Image
          src={google}
          width={24}
          height={24}
          alt="Google Logo"
          className="w-6 md:w-8"
        />
        <span className="text-sm md:text-base">Continue with Google</span>
      </button>
    </form>
  );
}

export default GoogleLogin;
