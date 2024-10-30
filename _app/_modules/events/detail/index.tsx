"use client";

import Image from "next/image";
import React from "react";
import MotoGPHero from "@/assets/events/motogp-hero.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/root/_app/components/ui/card";
import Video1 from "@/assets/events/video1.png";
import Video2 from "@/assets/events/video2.png";
import Video3 from "@/assets/events/video3.png";
import Video4 from "@/assets/events/video4.png";
import CircuitLayout from "@/assets/events/circuit-layout.png";
import { ChevronDownIcon } from "lucide-react";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/root/_app/components/ui/radio-group";
import { Label } from "@/root/_app/components/ui/label";
import { Button } from "@/root/_app/components/ui/button";
import { useRouter } from "next/navigation";

const EventsDetail = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Image src={MotoGPHero} alt="Logo" className="w-full" />

      <div className="flex flex-col-reverse px-6 py-10 gap-14 md:flex-row md:px-14">
        <div className="space-y-14">
          <section className="space-y-5">
            <div className="text-3xl font-bold">
              Best of the Best Things to Do
            </div>
            <div className="text-justify">
              MotoGP is a premier motorcycle racing championship that features
              highly skilled riders from around the world competing on
              purpose-built racing motorcycles. It is considered the pinnacle of
              motorcycle road racing and attracts a large global audience. The
              championship consists of a series of races held on various
              circuits worldwide, where riders showcase their speed, agility,
              and racing prowess. MotoGP motorcycles are technologically
              advanced, reaching high speeds and showcasing cutting-edge
              engineering. The championship is known for its intense
              competition, thrilling overtakes, and a showcase of rider skill
              and bravery.
            </div>
          </section>

          <section className="space-y-10">
            <div className="text-3xl font-bold">Video</div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Image src={Video1} alt="Video1" className="w-full" />
              <Image src={Video2} alt="Video2" className="w-full" />
              <Image src={Video3} alt="Video3" className="w-full" />
              <Image src={Video4} alt="Video4" className="w-full" />
            </div>
          </section>
          <section className="space-y-10">
            <div className="text-3xl font-bold">Circuit Layout</div>
            <Image src={CircuitLayout} alt="CircuitLayout" className="w-full" />
          </section>
          <section className="space-y-5">
            <div className="text-3xl font-bold">FAQ</div>

            <Card className="rounded-xl">
              <CardHeader className="py-4">
                <CardTitle
                  className="flex justify-between font-light text-md"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div>How to buy a ticket?</div>
                  <ChevronDownIcon />
                </CardTitle>
              </CardHeader>
              {isOpen && (
                <CardContent>
                  <div>
                    You can buy a ticket by visiting our official website or by
                    contacting our customer service.
                  </div>
                </CardContent>
              )}
            </Card>
            <Card className="rounded-xl">
              <CardHeader className="py-4">
                <CardTitle
                  className="flex justify-between font-light text-md"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div>Any maximum ticket to purchase?</div>
                  <ChevronDownIcon />
                </CardTitle>
              </CardHeader>
              {isOpen && (
                <CardContent>
                  <div>
                    Maximum ticket to purchase is 5 tickets per person. If you
                    want to buy more, please contact our customer service.
                  </div>
                </CardContent>
              )}
            </Card>
            <Card className="rounded-xl">
              <CardHeader className="py-4">
                <CardTitle
                  className="flex justify-between font-light text-md"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div>How many facilities in the circuit?</div>
                  <ChevronDownIcon />
                </CardTitle>
              </CardHeader>
              {isOpen && (
                <CardContent>
                  <div>
                    There are 3 facilities in the circuit, which are parking
                    area, food court, and toilet.
                  </div>
                </CardContent>
              )}
            </Card>
            <Card className="rounded-xl">
              <CardHeader className="py-4">
                <CardTitle
                  className="flex justify-between font-light text-md"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div>Any ticket bundling with circuit tour?</div>
                  <ChevronDownIcon />
                </CardTitle>
              </CardHeader>
              {isOpen && (
                <CardContent>
                  <div>
                    Yes, there is a ticket bundling with circuit tour. You can
                    check the detail on our official website.
                  </div>
                </CardContent>
              )}
            </Card>
            <Card className="rounded-xl">
              <CardHeader className="py-4">
                <CardTitle
                  className="flex justify-between font-light text-md"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div>Can i use gift card to get a discount?</div>
                  <ChevronDownIcon />
                </CardTitle>
              </CardHeader>
              {isOpen && (
                <CardContent>
                  <div>
                    Yes, you can use gift card to get a discount. Please make
                    sure your gift card is still valid.
                  </div>
                </CardContent>
              )}
            </Card>
          </section>
        </div>
        <div className="md:w-[180rem]">
          <Card className="border-[#E7E5E4] bg-[#FAFAF9]">
            <CardContent className="p-6">
              <div>
                <div className="font-semibold">Choose ticket type</div>
              </div>

              <div className="my-6 text-sm">
                <div className="p-2 bg-white border border-b-0 rounded-t-lg">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">Pertamina Grand Stand</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="p-2 text-white bg-black border rounded-b-lg">
                  Rp2,500,000
                </div>
              </div>

              <div className="my-6 text-sm">
                <div className="p-2 bg-white border border-b-0 rounded-t-lg">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="" id="option-one" />
                      <Label htmlFor="option-one">Zone B</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="p-2 text-white bg-black border rounded-b-lg">
                  Rp500,000
                </div>
              </div>

              <div className="my-6 text-sm">
                <div className="p-2 bg-white border border-b-0 rounded-t-lg">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="" id="option-one" />
                      <Label htmlFor="option-one">Zone J, K</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="p-2 text-white bg-black border rounded-b-lg">
                  Rp200,000
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <div>4 More</div>
                <ChevronDownIcon />
              </div>

              <Button
                onClick={() => router.push("/checkout")}
                className="w-full mt-6 text-black bg-primary"
              >
                Buy Ticket
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventsDetail;
