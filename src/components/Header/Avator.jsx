"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

function Avator({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  const avatarRef = useRef(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      if (session?.user?.role === "patient") {
        const response = await fetch(`api/patients/${session?.user?.id}`, {
          method: "GET",
        });
        const userData = await response.json();
        setUser(userData);
      }
      if (session?.user?.role === "doctor") {
        const response = await fetch(`api/doctors/${session?.user?.id}`, {
          method: "GET",
        });
        const userData = await response.json();
        setUser(userData);
      }
    };
    getUser();
  }, [session]);
  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <div
        ref={avatarRef}
        className={`rounded-full overflow-hidden w-10 h-10 cursor-pointer ${
          isOpen
            ? "outline outline-yellow-500 shadow-[0_0_5px_#fdc417,0_0_5px_#fdc417]"
            : ""
        }`}
        onClick={toggleMenu}
      >
        <Image
          src={user?.image || "https://i.ibb.co.com/f0tg7c3/user.png"}
          alt="User Avatar"
          width={500}
          height={500}
          className="object-cover h-full w-full"
        />
      </div>

      {isOpen && (
        <DropdownMenu
          session={session}
          user={user}
          setIsOpen={setIsOpen}
          avatarRef={avatarRef}
        />
      )}
    </div>
  );
}

export default Avator;
