/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eqeqeq */
/* eslint-disable @next/next/no-async-client-component */
import React from "react";
import { Routes } from "@/config/routes";
import { trFirst } from "@/helpers/trans";
import { Label } from "@/ui/label";
import { useTranslations } from 'next-intl';

const UserLanding: React.FC = () => {
  const t = useTranslations();
  const isRedirectSignin = process.env.NEXT_PUBLIC_REDIRECT_SIGNIN == "true";
  
  React.useEffect(() => {
    if (isRedirectSignin) {
      window.location.href = Routes.AUTH_SIGNIN;
    }
  }, [isRedirectSignin]);

  return (
    <div
      suppressHydrationWarning
      className="user-landing absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex flex-col justify-center items-center">
        <Label className="mb-2">
          <h2>
            <strong>{trFirst({ t, key: "page,landing" })}</strong>
          </h2>
        </Label>
        <Label>{trFirst({ t, key: "this,is,page,landing" })}</Label>
      </div>
    </div>
  );
};

export default UserLanding;
