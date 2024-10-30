import Image from "next/image";
import React from "react";
import HeroBanner from "@/assets/hero-banner.png";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const SectionHero = () => {
  return (
    <div className="relative mb-64 md:mb-20">
      <div className="absolute w-full px-20 md:-bottom-12 -bottom-64">
        <Card>
          <CardContent className="py-0">
            <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-3">
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Booking Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Attractions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Visiting Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <div className="w-full">
                  <Button>Book Now</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Image src={HeroBanner} alt="HeroBanner" />
    </div>
  );
};

export default SectionHero;
