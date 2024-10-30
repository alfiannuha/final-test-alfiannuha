/* eslint-disable import/no-unresolved */
import React from "react";
import Image from "next/image";
import Promotion1 from "@/assets/promotions/1.png";
import Promotion2 from "@/assets/promotions/2.png";
import Promotion3 from "@/assets/promotions/3.png";
import Promotion4 from "@/assets/promotions/4.png";

const SectionPromotions = () => {
  return (
    <div className="px-6 py-10 md:px-14">
      <div className="bg-[#FAFAF9] p-14">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Best of the Best Things to Do</h1>
          <p className="my-4">
            The Travelers' Choice Awards Best of the Best title celebrates the
            highest level of excellence in travel
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2">
          <div className="relative w-[260px] md:w-[545px] mb-12">
            <div className="absolute bottom-0 h-20 min-w-full p-4 text-white rounded-b-2xl bg-gradient-to-t from-black to-transparent">
              <div className="font-semibold text-md">Imagine Dragon</div>
              <div className="text-xs">11 September 2024</div>
            </div>
            <Image src={Promotion1} alt="Promotion1" />
          </div>
          <div className="relative w-[260px] md:w-[545px] mb-12">
            <div className="absolute bottom-0 w-full h-20 p-4 text-white rounded-b-2xl bg-gradient-to-t from-black to-transparent">
              <div className="font-semibold text-md">Tyga</div>
              <div className="text-xs">11 September 2024</div>
            </div>
            <Image src={Promotion2} alt="Promotion2" />
          </div>
          <div className="relative w-[260px] md:w-[545px] mb-12">
            <div className="absolute bottom-0 w-full h-20 p-4 text-white rounded-b-2xl bg-gradient-to-t from-black to-transparent">
              <div className="font-semibold text-md">David Guetta</div>
              <div className="text-xs">11 September 2024</div>
            </div>
            <Image src={Promotion3} alt="Promotion3" />
          </div>
          <div className="relative w-[260px] md:w-[545px] mb-12">
            <div className="absolute bottom-0 w-full h-20 p-4 text-white rounded-b-2xl bg-gradient-to-t from-black to-transparent">
              <div className="font-semibold text-md">John Mayer</div>
              <div className="text-xs">11 September 2024</div>
            </div>
            <Image src={Promotion4} alt="Promotion4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPromotions;
