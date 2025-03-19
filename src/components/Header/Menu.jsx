"use client";
import Hamburger from 'hamburger-react'
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from './Button';
function Menu() {
  
  return (
    <>
      <MainMenu />
      <MobileMenu />
    </>
  );
}

const MainMenu = () => {
  const pathname = usePathname();
  return(

    <ul className="menu gap-10 hidden md:flex">
    {[
      { address: "/", link: "home" },
      { address: "/about", link: "about" },
      { address: "/services", link: "services" },
      { address: "/find-doctors", link: "Doctors" },
      { address: "/contact", link: "contact" },
    ].map((item) => {
      const isActive =
      pathname === item.address || pathname.startsWith(`${item.address}/`);
      
      return (
        <li
        key={item.link}
        className={`menuItem capitalize ${isActive ? "text-yellow-600 font-semibold !important" : ""}`}
        >
          <Link href={item.address}>{item.link}</Link>
        </li>
      );
    })}
  </ul>
  )
}

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation(); // Stop event from bubbling
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Hamburger Icon */}
      <div ref={hamburgerRef} className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-24 ${
          isOpen ? "right-5" : "-right-full"
        } bg-white w-3/4 p-5 rounded-lg transition-all duration-300 ease-in-out shadow-lg`}
      >
        <ul className="menu flex flex-col gap-3">
          {[
            { address: "/", link: "home" },
            { address: "/about", link: "about" },
            { address: "/services", link: "services" },
            { address: "/find-doctors", link: "Doctors" },
            { address: "/contact", link: "contact" },
          ].map((item) => {
            const isActive =
              pathname === item.address || pathname.startsWith(`${item.address}/`);

            return (
              <li
                key={item.link}
                className={`menuItem capitalize w-fit ${
                  isActive ? "text-yellow-600 font-semibold !important" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                <Link href={item.address}>{item.link}</Link>
              </li>
            );
          })}
          <Button />
        </ul>
      </div>
    </>
  );
};

export default Menu;
