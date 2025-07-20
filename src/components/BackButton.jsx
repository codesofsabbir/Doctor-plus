"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="px-10 py-2 md:px-16 md:py-3 rounded-full bg-[#f0da6a] md:text-lg text-blue-950 cursor-pointer"
    >
      Back
    </button>
  );
}
