/* eslint-disable import/no-unresolved */
import Image from "next/image";
import React from "react";

import GiliIsland from "@/assets/deals/1.png";
import RoadRacing from "@/assets/deals/2.png";
import RomanticDinner from "@/assets/deals/3.png";
import Golf from "@/assets/deals/4.png";
import { Button } from "../../ui/button";

const SectionIncridibleDeals = () => {
  return (
    <div className="px-6 py-10 md:px-14">
      <div className="flex flex-col items-start justify-between mb-5 md:items-center md:flex-row md:mb-0">
        <div>
          <div className="text-3xl font-bold">Incridible Deals</div>
          <div className="mt-2 mb-10">
            Select from an array of staycation, dining and attraction
            promotions.
          </div>
        </div>
        <Button
          className="bg-[#FEE8D3] text-black font-bold hover:bg-orange-300"
          size="lg"
        >
          View All Promotions
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <div className="w-full md:w-80">
          <Image src={GiliIsland} alt="Gili Island" className="w-full" />
          <div className="py-3">
            <div className="text-xl font-bold truncate">
              Gili Islands Full Day Snorkling
            </div>
            <div className="text-sm line-clamp-2 mt-1.5 ">
              Embark on a captivating full-day snorkeling experience to the
              enchanting Gili Islands with the esteemed PADI 5* Center
            </div>
          </div>
        </div>
        <div className="w-full md:w-80">
          <Image src={RoadRacing} alt="Road Racing" className="w-full" />
          <div className="py-3">
            <div className="text-xl font-bold truncate">
              FIM Asian Road Racing Championship
            </div>
            <div className="text-sm line-clamp-2 mt-1.5 ">
              The Asia Road Racing Championship is the only regional level
              motorcycle racing series in Asia. It representant the next step
              for riders graduating from their respective national championships
            </div>
          </div>
        </div>
        <div className="w-full md:w-80">
          <Image
            src={RomanticDinner}
            alt="Romantic Dinner"
            className="w-full"
          />
          <div className="py-3">
            <div className="text-xl font-bold truncate">
              Ultimate Romantic Dinner
            </div>
            <div className="text-sm line-clamp-2 mt-1.5 ">
              The bliss of being in love is best enjoyed at Tugu Lombok, where
              every suite is inspired with romantic tales and legends from
              ancient kingdoms.
            </div>
          </div>
        </div>
        <div className="w-full md:w-80">
          <Image src={Golf} alt="Golf" className="w-full" />
          <div className="py-3">
            <div className="text-xl font-bold truncate">
              Lombok Golf Kosaido
            </div>
            <div className="text-sm line-clamp-2 mt-1.5 ">
              The only 18-hole international golf course on Lombok Island is a
              6245-meter par 72 championship course designed by Peter Thompson,
              Michael Wolveridge and Perret.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionIncridibleDeals;
