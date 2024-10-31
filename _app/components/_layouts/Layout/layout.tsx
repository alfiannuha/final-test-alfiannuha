"use client";

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { usePathname } from "next/navigation";

const LayoutPublic = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPublic;
