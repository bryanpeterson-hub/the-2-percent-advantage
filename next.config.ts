import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

// Top-level PluginOptions do not include skipWaiting; pass Workbox flags via workboxOptions.
// skipWaiting defaults to true in workbox GenerateSW; we keep it explicit for clarity.
export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  workboxOptions: {
    skipWaiting: true,
  },
})(nextConfig);
