/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line prettier/prettier
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'id';
 
  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default
  };
});