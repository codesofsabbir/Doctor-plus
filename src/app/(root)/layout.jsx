import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { SessionProvider } from "next-auth/react";

function Layout({ children }) {
  return (
    <SessionProvider>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </SessionProvider>
  );
}

export default Layout;
