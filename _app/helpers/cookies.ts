/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";

const CookiesHelper = {
  name: {
    AUTH_TOKEN: "AUTH_TOKEN",
    AUTH_PERMISSION: "AUTH_PERMISSION",
    AUTH_SETTING: "AUTH_SETTING",
    AUTH_DATA: "AUTH_DATA",
    GUEST_ID: "GUEST_ID",
  },
  set: (name: string, value: any) => {
    Cookies.set(name, JSON.stringify(value));
  },
  get: (name: string) => {
    try {
      return JSON.parse(Cookies.get(name) ?? "");
    } catch (err) {
      return null;
    }
  },
  del: (name: string) => {
    Cookies.remove(name);
  },
};

export default CookiesHelper;
