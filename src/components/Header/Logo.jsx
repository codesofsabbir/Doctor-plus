"use client"; 
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch("http://localhost:5001/logo");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setLogo(data[0]?.image);
      } catch (error) {
        console.error("Failed to fetch the logo:", error);
        setError(true);
      }
    };

    fetchLogo();
  }, []);

  if (error) return <div>Error loading logo</div>;

  return (
    <Link href="/">
      {logo ? (
        <Image
          src={logo}
          alt="Doctor Plus logo"
          width={250}
          height={250}
          className=""
        />
      ) : (
        <div>Loading...</div>
      )}
    </Link>
  );
};

export default Logo;
