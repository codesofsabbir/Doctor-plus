"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import LoginMenu from "./LoginMenu";
import LogoutMenu from "./LogoutMenu";

function Avator() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // Default state is null
  const menuRef = useRef(null);
  const avatarRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation(); // Stop event from bubbling
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsOpen(false);
};

  useEffect(() => {
    fetch("http://localhost:5001/user")
      .then((res) => res.json())
      .then((data) => {
        const foundUser = data.find(
          (user) =>
            user.phone === "01303142498" && user.password === 1111111
        );

        if (foundUser) {
          setUser(foundUser);
          setIsLogin(true); // Update login state when user is found
        }
      })
      .catch((error) => console.error("Error fetching data:", error));

    // Click outside to close menu
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10">
      <div
        ref={avatarRef}
        className="rounded-full overflow-hidden w-10 h-10 border cursor-pointer"
        onClick={toggleMenu}
      >
        <Image
          src={isLogin && user?.image ? user.image : "https://i.ibb.co.com/f0tg7c3/user.png"}
          alt="Doctor Plus logo"
          width={50}
          height={50}
          className="object-cover"
        />
      </div>
      {isOpen && (
        <div ref={menuRef} className="absolute top-12 -right-1/2 bg-white shadow-md p-2 rounded-lg w-[280px]">
          {isLogin ? <LoginMenu user={user} closeMenu={closeMenu}/> : <LogoutMenu avatar="https://i.ibb.co.com/f0tg7c3/user.png" closeMenu={closeMenu}/>}
        </div>
      )}
    </div>
  );
}

export default Avator;
