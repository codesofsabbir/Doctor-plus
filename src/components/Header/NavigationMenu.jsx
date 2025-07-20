"use client";
import React, { useRef, useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "./Logo";
import Button from "./Button";
import Avator from "./Avator";
import Nav from "./Nav";
import { useSession } from "next-auth/react";
function NavigationMenu() {
  const { data: session } = useSession();
  console.log(session);
  const hamburgerRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full bg-blue-800">
      <div className="w-9/10 mx-auto flex justify-between items-center h-20">
        <div className="flex items-center gap-20">
          <Logo />
          <Nav hamburgerRef={hamburgerRef} isOpen={isOpen} setOpen={setOpen} />
        </div>
        <div className="flex gap-5">
          <div ref={hamburgerRef} className="md:hidden text-white">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </div>
          <Button className="hidden md:block" />
          <Avator session={session} />
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
