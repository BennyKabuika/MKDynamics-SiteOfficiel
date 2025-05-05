// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === 'dev' ? 'dev' : '.next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: outputDir,

  compiler: {
    reactRemoveProperties: isProduction,
    
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },

  devIndicators: {
    position: "top-right", // ⚠️ nouvelle syntaxe
  },

  // ❌ Ces options ne sont plus reconnues
  // experimental: {
  //   legacyBrowsers: false,
  //   swcFileReading: true,
  //   appDir: true,
  // },

  productionBrowserSourceMaps: isProduction,

  images: {
    domains: ["raw.githubusercontent.com"],
  },

  // ❌ Ces options sont désormais automatiques dans Next.js 13+
  // optimizeFonts: true,
  // swcMinify: !isProduction,
};

module.exports = nextConfig;
