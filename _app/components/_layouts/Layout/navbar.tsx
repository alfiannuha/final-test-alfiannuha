/* eslint-disable import/no-unresolved */

"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ChevronUp, SearchIcon, Text } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import ShoppingCart from "@/assets/icons/shopping-cart.svg";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const Navbar = () => {
  const [lang, setLang] = React.useState("ENG");

  const [showButtonScrollToTop, setShowButtonScrollToTop] =
    React.useState(false);

  // make function to show button scroll to top
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButtonScrollToTop(true);
    } else {
      setShowButtonScrollToTop(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav suppressHydrationWarning>
      <div className="flex items-center justify-between p-4">
        <Image
          src="/assets/logo-brand.svg"
          alt="Logo"
          width={300}
          height={400}
        />

        <div className="hidden mr-10 space-x-5 md:block">
          <Link href="/#shop">Shop</Link>
          <Link href="/#hotels">Hotels</Link>
          <Link href="/#food">Food & Beverage</Link>
          <Link href="/#events">Events</Link>
          <Link href="/#attractions">Attractions</Link>
          <Link href="/#promotions">Promotions</Link>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center justify-end gap-4">
            <div className="relative">
              <Image
                src={ShoppingCart}
                alt="Search"
                width={30}
                height={30}
                className="cursor-pointer"
              />
              <div className="absolute top-0 flex justify-center w-4 h-4 text-[10px] bg-red-500 rounded-full itms-center -right-1 text-white font-medium">
                3
              </div>
            </div>
            <div className="relative">
              <Input placeholder="Search" />
              <SearchIcon className="absolute bg-white top-2 right-3" />
            </div>
            <div className="flex text-sm font-medium">
              <div
                onClick={() => setLang("ENG")}
                className={`${lang === "ENG" ? "text-orange-400 bg-orange-200 border-[1.5px] border-orange-400" : "text-gray-400 bg-gray-200 border-[1.5px] border-gray-200 "} cursor-pointer px-3 py-0.5 rounded-l-md`}
              >
                ENG
              </div>
              <div
                onClick={() => setLang("ID")}
                className={`${lang === "ID" ? "text-orange-400 bg-orange-200 border-[1.5px] border-orange-400" : "text-gray-400 bg-gray-200 border-[1.5px] border-gray-200 "} cursor-pointer px-3 py-0.5 rounded-r-md`}
              >
                ID
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Text size={30} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/#shop">Shop</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#hotels">Hotels</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/#food">Food & Beverage</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/#events">Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/#attractions">Attractions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/#promotions">Promotions</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {showButtonScrollToTop && (
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed rounded-full w-14 h-14 bottom-6 right-6"
          >
            <ChevronUp />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
