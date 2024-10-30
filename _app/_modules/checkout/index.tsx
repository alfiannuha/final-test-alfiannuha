"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Label } from "../../components/ui/label";
import BankBNI from "@/assets/bank/BNI.png";
import BankBCA from "@/assets/bank/BCA.png";
import BankMANDIRI from "@/assets/bank/MANDIRI.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import { Checkbox } from "../../components/ui/checkbox";
import { useRouter } from "next/navigation";

const CheckoutModules = () => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    router.push("/");
  };

  return (
    <div className="px-6 py-10 md:px-14">
      <div className="mb-5 text-3xl font-bold">Checkout</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="text-lg">Billing Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-10">
                  <div className="text-sm font-semibold">
                    Account Information
                  </div>

                  <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tuliskan nama depan Anda"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tuliskan nama belakang Anda"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: email@domain.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: 08912354232423"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-5 text-sm font-semibold">
                    Payment Method
                  </div>

                  <RadioGroup
                    defaultValue="option-one"
                    className="flex items-center gap-5"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one" className="text-sm">
                        Direct Bank Transfer
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two" className="text-sm">
                        Credit Card
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="md:w-[20rem] my-10">
                    <div className="flex items-center justify-start gap-5 pb-5 border-b">
                      <Image src={BankBNI} alt="BNI" className="w-32 h-10" />
                      <div>
                        <div className="text-sm font-bold">PT ITDC</div>
                        <div className="text-sm">9008906999</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start gap-5 py-5 border-b">
                      <Image src={BankBCA} alt="BCA" className="w-32 h-10" />
                      <div>
                        <div className="text-sm font-bold">PT ITDC</div>
                        <div className="text-sm">9008906999</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start gap-5 py-5 border-b">
                      <Image
                        src={BankMANDIRI}
                        alt="MANDIRI"
                        className="w-32 h-10"
                      />
                      <div>
                        <div className="text-sm font-bold">PT ITDC</div>
                        <div className="text-sm">9008906999</div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/payment"
                    className="flex items-center text-primary"
                  >
                    <div className="font-semibold">
                      How to purchase via bank transfer
                    </div>
                    <ChevronRightIcon />
                  </Link>
                </div>

                <div className="my-10">
                  <div className="flex items-center justify-start gap-5">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms2"
                      className="text-sm font-medium leading-none tracking-wide peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I AGREE AND CONSENT TO:
                    </label>
                  </div>
                  <div className="mt-3 text-xs">
                    The Terms and Conditions and to the collection, use and
                    disclosure of my personal data by ITDC for the processing
                    and notification of my reservation booking and payment, as
                    well as other applicable purposes in accordance with the
                    ITDC Personal Data Protection Statement.
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="md:w-[25rem] w-full">
              <CardHeader>
                <CardTitle className="text-lg">Summary</CardTitle>
              </CardHeader>
              <CardContent className="px-6 space-y-3">
                <div>
                  <div className="font-semibold">Pertamina Grand Stand</div>
                  <div className="text-sm">Rp2,500,000</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>Qty</div>
                  <div>2</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>Subtotal</div>
                  <div>Rp5,000,000</div>
                </div>
                <div className="my-5 border"></div>
                <div className="flex justify-between text-sm">
                  <div>Tax (10%)</div>
                  <div>Rp500,000</div>
                </div>
                <div className="flex justify-between font-semibold">
                  <div>Total</div>
                  <div>Rp5,500,000</div>
                </div>
                <Button
                  type="submit"
                  className="w-full font-semibold text-black bg-primary"
                >
                  Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutModules;
