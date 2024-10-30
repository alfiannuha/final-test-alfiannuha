/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eqeqeq */
/* eslint-disable @next/next/no-async-client-component */
import React from "react";
import { Routes } from "@/config/routes";
import SectionIncridibleDeals from "../../components/molecules/SectionIncredibleDeals";
import SectionEvents from "../../components/molecules/SectionEvents";
import SectionPromotions from "../../components/molecules/SectionPromotions";
import SectionHotels from "../../components/molecules/SectionHotels";
import SectionHero from "../../components/molecules/SectionHero";
// import { useTranslations } from "next-intl";
// import { trFirst } from "@/helpers/trans";
// import { Label } from "@/ui/label";

const UserLanding: React.FC = () => {
  // const t = useTranslations();
  const isRedirectSignin = process.env.NEXT_PUBLIC_REDIRECT_SIGNIN == "true";

  React.useEffect(() => {
    if (isRedirectSignin) {
      window.location.href = Routes.AUTH_SIGNIN;
    }
  }, [isRedirectSignin]);

  return (
    <div suppressHydrationWarning>
      <div>
        <SectionHero />

        <SectionIncridibleDeals />

        <SectionEvents />

        <SectionPromotions />

        <SectionHotels />
      </div>
    </div>
  );
};

export default UserLanding;
