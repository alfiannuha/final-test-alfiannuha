/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: "standalone",
  webpack: (config) => {
    /** @type {import('webpack').Configuration} */
    const c = config;
    c.plugins = c.plugins || [];
    c.plugins.push(
      require("unplugin-auto-import/webpack").default({
        imports: [
          "react",
          "react-i18next",
          {
            "next/navigation": [
              "usePathname",
              "useSearchParams",
              "useSearchParamsState",
              "navigate",
            ],
          },
        ],
        dirs: [
          "./src/common/**/*",
          "./src/hooks/**/*",
          "./src/components/**/*",
        ],
        eslintrc: {
          enabled: true,
        },
        dts: "./auto-imports.d.ts",
        include: [/\.ts$/, /\.tsx$/],
      }),
    );
    return c;
  },
};

module.exports = withNextIntl(nextConfig);
