"use client";

/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eqeqeq */
/* eslint-disable @next/next/no-async-client-component */
import React from "react";
import CookiesHelper from "@/helpers/cookies";
import { useRouter } from "next/navigation";
import { Routes } from "@/config/routes";
import { useTranslations } from 'next-intl';
import { Button } from "@/ui/button";
import { trFirst } from "@/helpers/trans";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

const AuthSignin: React.FC = () => {
  const t = useTranslations();
  const router = useRouter();

  const onSignin = async () => {
    CookiesHelper.set(CookiesHelper.name.AUTH_TOKEN, "token");
    router.push(Routes.BO_DASHBOARD);
  }

  return (
    <div suppressHydrationWarning className="user-landing absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{trFirst({t, key: "login"})}</CardTitle>
          <CardDescription>
            {trFirst({t, key: "enter,your,email,below,to,login"})}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">{trFirst({t, key: "email"})}</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{trFirst({t, key: "password"})}</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onSignin} className="w-full">{ trFirst({ t, key: "signin"}) }</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthSignin;
