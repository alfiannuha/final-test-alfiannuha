import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#FAFAF9] py-8 md:px-14 px-6">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-80">
            <Image
              src="/assets/logo-brand.svg"
              alt="Logo"
              width={400}
              height={400}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus
              facilisi vitae sit varius aenean sed augue.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 mt-6 space-x-0 space-y-8 md:space-x-8 md:grid-cols-4 md:space-y-0 md:mt-0">
              <div className="space-y-6">
                <div>Attractions</div>
                <div className="text-gray-400">
                  <Link href="/">Gili Island</Link>
                </div>
                <div className="text-gray-400">
                  <Link href="/">Moto GP</Link>
                </div>
                <div className="text-gray-400">
                  <Link href="/">Edupark</Link>
                </div>
              </div>
              <div className="space-y-6">
                <div>Food & Beverage </div>
                <div className="text-gray-400">
                  <Link href="/">Label</Link>
                </div>
                <div className="text-gray-400">
                  <Link href="/">Lable</Link>
                </div>
                <div className="text-gray-400">
                  <Link href="/">Label</Link>
                </div>
              </div>
              <div className="space-y-6">
                <div>Hotels</div>
                <div className="text-gray-400">
                  <Link href="/">Johny Walker</Link>
                </div>
                <div className="text-gray-400">
                  <Link href="/">Samawa</Link>
                </div>
                <div className="text-gray-400">
                  <Link href="/">Roomate</Link>
                </div>
              </div>
              <div className="space-y-6">
                <div>Social Media</div>
                <div className="text-gray-400">
                  <Link href="/">Instgram</Link>
                </div>
                <div className="text-gray-400">
                  <Link href="/">Facebook</Link>
                </div>
                <div className="text-gray-400">
                  <Link href="/">Youtube</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#D6D3D1] py-2.5 text-xs tracking-wider font-medium">
        Copyright 2024 &copy; ITDC All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
