/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import type { NextRequest } from "next/server";
import { Routes } from "@/config/routes";
import CookiesHelper from "@/helper/cookies";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

const routeIgnore = ["/favicon.ico", "/manifest.webmanifest"];

const routeWithNoAuth = ["/", Routes.AUTH_SIGNIN];

const routeWithAuth = [Routes.BO_DASHBOARD, Routes.BO_COMPONENTS];

const middleware = (request: NextRequest) => {
  const authUser = request.cookies.get(CookiesHelper.name.AUTH_TOKEN);
  if (routeIgnore.includes(request.nextUrl.pathname)) {
    return;
  }
  if (authUser && routeWithNoAuth.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL(Routes.BO_DASHBOARD, request.url));
  }
  if (!authUser && routeWithAuth.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL(Routes.AUTH_SIGNIN, request.url));
  }
};

export default middleware;
