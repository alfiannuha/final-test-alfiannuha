import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import EquariusVillas from "@/assets/hotels/1.png";
import JohnyWalkerHotels from "@/assets/hotels/2.png";
import CrockfordsVillas from "@/assets/hotels/3.png";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const SectionHotels = () => {
  return (
    <div className="px-6 py-10 md:px-14">
      <div className="flex flex-col items-start justify-between mb-5 md:items-center md:flex-row md:mb-0">
        <div>
          <div className="text-3xl font-bold">Accommodation Play Your Way</div>
          <div className="mt-2 mb-10">
            Select from an array of staycation, dining and attraction
            promotions.
          </div>
        </div>
        <Button
          className="bg-[#FEE8D3] text-black font-bold hover:bg-orange-300"
          size="lg"
        >
          View All Accomodations
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <Image src={EquariusVillas} alt="EquariusVillas" />
          <div className="py-3">
            <div className="text-xl font-bold truncate">Equarius Villas</div>
            <Link
              href="/hotels/1"
              className="flex items-center mt-2 text-sm font-medium text-primary"
            >
              Explore More
              <ChevronRightIcon className="h-5" />
            </Link>
          </div>
        </div>
        <div>
          <Image src={JohnyWalkerHotels} alt="JohnyWalkerHotels" />
          <div className="py-3">
            <div className="text-xl font-bold truncate">
              Johny Walker Hotels
            </div>
            <Link
              href="/hotels/2"
              className="flex items-center mt-2 text-sm font-medium text-primary"
            >
              Explore More
              <ChevronRightIcon className="h-5" />
            </Link>
          </div>
        </div>
        <div>
          <Image src={CrockfordsVillas} alt="CrockfordsVillas" />
          <div className="py-3">
            <div className="text-xl font-bold truncate">Crockfords Villas</div>
            <Link
              href="/hotels/3"
              className="flex items-center mt-2 text-sm font-medium text-primary"
            >
              Explore More
              <ChevronRightIcon className="h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHotels;
