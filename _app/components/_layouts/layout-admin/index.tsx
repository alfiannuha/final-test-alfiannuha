/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Sidebar from "@/layout/layout-admin/sidebar";
import Navbar from "@/layout/layout-admin/navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const fonts = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Layout: React.FC<any> = async ({
  children, 
}) => {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME ?? "My App"}</title>
      </head>
      <body className={fonts.className}>
        <NextIntlClientProvider messages={messages}>
          <div
            suppressHydrationWarning
            className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
          >
            <Sidebar />
            <div className="flex flex-col">
              <Navbar />
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default Layout;
