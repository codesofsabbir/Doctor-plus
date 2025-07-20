import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { doLogout } from "@/app/actions";
function Nav({ hamburgerRef, setOpen, isOpen }) {
  const menuRef = useRef(null);
  const pathname = usePathname();
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
    <div
      ref={menuRef}
      className={`bg-blue-800 p-10 w-full absolute top-24 right-0 z-[10] transform transition-all duration-500 ease-in-out
md:static md:translate-x-0 md:opacity-100 md:p-0 md:w-fit lg:gap-10
${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
`}
    >
      <ul className="menu flex flex-col gap-3 md:flex-row md:gap-5 lg:gap-10">
        {[
          { address: "/", link: "home" },
          { address: "/about", link: "about" },
          { address: "/services", link: "services" },
          { address: "/doctors", link: "doctors" },
          { address: "/contact", link: "contact" },
        ].map((item) => {
          const isActive =
            pathname === item.address ||
            pathname.startsWith(`${item.address}/`);

          return (
            <li
              key={item.link}
              className={`menuItem capitalize ${
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
      </ul>
    </div>
  );
}

export default Nav;
