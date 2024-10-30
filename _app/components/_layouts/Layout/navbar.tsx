/* eslint-disable import/no-unresolved */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Text } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import ShoppingCart from "@/assets/icons/shopping-cart.svg";
import { Input } from "../../ui/input";

const Navbar = () => {
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
          <Link href="/">Shop</Link>
          <Link href="/">Hotels</Link>
          <Link href="/">Food & Beverage</Link>
          <Link href="/">Events</Link>
          <Link href="/">Attractions</Link>
          <Link href="/">Promotions</Link>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center justify-end gap-4">
            <Image src={ShoppingCart} alt="Search" width={30} height={30} />
            <Input placeholder="Search" />
            <div className="flex font-semibold">
              <div className="px-3 py-0.5 text-orange-400 bg-orange-200 border-2 border-orange-400 rounded-l-md">
                ENG
              </div>
              <div className="px-3 py-0.5 text-gray-400 bg-gray-200 border-2 border-l-0 border-gray-200 rounded-r-md">
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
                  <Link href="/">Shop</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">Hotels</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">Food & Beverage</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">Attractions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">Promotions</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
