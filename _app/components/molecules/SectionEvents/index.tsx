/* eslint-disable import/no-unresolved */
import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import MotoGP from "@/assets/events/motogp.png";

const SectionEvents = () => {
  return (
    <div className="px-6 py-10 md:px-14">
      <div className="flex flex-col items-start justify-between mb-5 md:items-center md:flex-row md:mb-0">
        <div className="md:w-[550px]">
          <div className="text-3xl font-bold">Newest Happening</div>
          <div className="mt-2 mb-10">
            From the latest dining destination to exhilarating events, there's
            always a new moment to discover.
          </div>
        </div>
        <Button
          className="bg-[#FEE8D3] text-black font-bold hover:bg-orange-300"
          size="lg"
        >
          View All Promotions
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <Image
              src={MotoGP}
              alt="MotoGP"
              className="rounded-t-lg md:rounded-l-lg"
            />
            <div className="md:w-[550px] flex flex-col justify-center items-start px-5 md:px-16 gap-4 my-6 md:my-0">
              <div className="text-xl font-bold md:text-3xl text-wrap">
                Pertamina Grand Prix of Indonesia
              </div>
              <div className="text-justify line-clamp-4">
                MotoGP is a premier motorcycle racing championship that features
                highly skilled riders from around the world competing on
                purpose-built racing motorcycles. It is considered the pinnacle
                of motorcycle road racing and attracts a large global audience.
                The championship consists of a series of races held on various
                circuits worldwide, where riders showcase their speed, agility,
                and racing prowess. MotoGP motorcycles are technologically
                advanced, reaching high speeds and showcasing cutting-edge
                engineering. The championship is known for its intense
                competition, thrilling overtakes, and a showcase of rider skill
                and bravery.
              </div>
              <Link
                href="/events/motogp"
                className="flex items-center justify-start gap-3 font-semibold text-primary"
              >
                Explore More
                <ChevronRightIcon />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectionEvents;
