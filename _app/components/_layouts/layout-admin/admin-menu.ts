import { Routes } from "@/config/routes";
import { Home, Package } from "lucide-react";

export const menuSidebar = [
  {
    name: "dashboard",
    icon: Home,
    link: Routes.BO_DASHBOARD,
  },
  {
    name: "components",
    icon: Package,
    link: Routes.BO_COMPONENTS,
  },
];

export const menuAccount = [
  {
    name: "my_account",
  },
  {
    separator: true,
  },
  {
    name: "settings",
  },
  {
    name: "help",
  },
  {
    separator: true,
  },
  {
    name: "logout",
  },
];
