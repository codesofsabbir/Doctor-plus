import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
function DropdownMenu({ setIsOpen, avatarRef, session, user }) {
  // const isLogin = user && !Array.isArray(user) && Object.keys(user).length > 0;
  const isLogin = !!user;
  console.log("get isLogin value", isLogin);
  const menuRef = useRef(null);
  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    console.log("get user from dropdown menu", user);
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
    <div
      ref={menuRef}
      className="absolute top-28 right-5 md:right-12 lg:right-16 bg-blue-950 text-white p-2 rounded-lg w-[280px] h-auto px-5 py-5 z-[100] outline outline-yellow-500 shadow-[0_0_5px_#fdc417,0_0_5px_#fdc417]"
    >
      {isLogin ? (
        session?.user?.role === "doctor" ? (
          <DoctorMenu closeMenu={closeMenu} user={user} />
        ) : session?.user?.role === "patient" ? (
          <PatientMenu closeMenu={closeMenu} user={user} />
        ) : null
      ) : (
        <UserMenu closeMenu={closeMenu} />
      )}
    </div>
  );
}

export default DropdownMenu;

function UserMenu({ closeMenu }) {
  return (
    <div>
      <ul className="menu flex flex-col gap-3 mr-20">
        <li onClick={closeMenu} className="dropDownMenuItem capitalize w-fit">
          <Link href="/login">Login</Link>
        </li>
        <li onClick={closeMenu} className="dropDownMenuItem capitalize w-fit">
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

function PatientMenu({ closeMenu, user }) {
  const pathname = usePathname();
  return (
    <div className="">
      <div className="flex gap-5 items-center ">
        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden relative cursor-pointer outline outline-yellow-500 shadow-[0_0_5px_#fdc417,0_0_5px_#fdc417]">
          <Image
            src={user?.image || "https://i.ibb.co.com/f0tg7c3/user.png"}
            width={350}
            height={350}
            alt={user?.name || "patient name"}
            className="object-cover h-full w-full"
          />
        </div>
        <div className=" leading-3">
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <span className="text-sm text-gray-500">{user?.phone}</span>
        </div>
      </div>
      <ul className="menu flex flex-col gap-2 pt-5">
        <div className=" border-y border-gray-400 py-5">
          {[
            { address: "/patient-dashboard", link: "dashboard" },
            { address: "/patient-appoinment", link: "My Appoinment" },
            { address: "/patient-medical-records", link: "Medical Records" },
            { address: "/prescriptions", link: "Prescriptions" },
            { address: "/patient-profile-setting", link: "Profile Setting" },
            { address: "/patient-support", link: "Help & Support" },
          ].map((item) => {
            const isActive =
              pathname === item.address ||
              pathname.startsWith(`${item.address}/`);

            return (
              <li
                key={item.link}
                className={`dropDownMenuItem capitalize ${
                  isActive
                    ? "text-[#ffd700] font-semibold !important"
                    : "text-[#d1d5db]"
                }`}
              >
                <Link href={item.address} onClick={closeMenu}>
                  {item.link}
                </Link>
              </li>
            );
          })}
        </div>

        <li
          onClick={() => {
            signOut(); // This signs out the user and redirects to the homepage
            closeMenu();
            setIsLogin(false);
          }}
          className="font-semibold capitalize text-red-500 cursor-pointer"
        >
          Logout
        </li>
      </ul>
    </div>
  );
}

function DoctorMenu({ closeMenu, user }) {
  const pathname = usePathname();
  return (
    <div className="">
      <div className="flex gap-5 items-center ">
        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden relative cursor-pointer outline outline-yellow-500 shadow-[0_0_5px_#fdc417,0_0_5px_#fdc417]">
          <Image
            src={user?.image ?? "https://i.ibb.co.com/f0tg7c3/user.png"}
            width={350}
            height={350}
            alt={user?.name || "patient image"}
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" leading-3">
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <span className="text-sm text-gray-500">{user?.phone}</span>
        </div>
      </div>

      <ul className="menu flex flex-col gap-2 pt-5">
        <div className=" border-y border-gray-400 py-5">
          {[
            { address: "/doctor-dashboard", link: "dashboard" },
            { address: "/doctor-appoinment", link: "My Appoinment" },
            { address: "/patient-list", link: "Patient List" },
            { address: "/doctor-profile-setting", link: "Profile Setting" },
            { address: "/doctor-support", link: "Help & Support" },
          ].map((item) => {
            const isActive =
              pathname === item.address ||
              pathname.startsWith(`${item.address}/`);

            return (
              <li
                key={item.link}
                className={`dropDownMenuItem capitalize ${
                  isActive
                    ? "text-[#ffd700] font-semibold !important"
                    : "text-[#d1d5db]"
                }`}
              >
                <Link href={item.address} onClick={() => setOpen(false)}>
                  {item.link}
                </Link>
              </li>
            );
          })}
        </div>

        <li
          onClick={() => {
            signOut();
            closeMenu();
            setIsLogin(false);
          }}
          className="font-semibold capitalize text-red-500 cursor-pointer"
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
