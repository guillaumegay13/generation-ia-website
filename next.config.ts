import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stable short links. Update the destination here when an invite changes;
  // every page, YouTube and RSS description can keep pointing to /discord.
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.com/invite/Amv8m4hWf",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
};

export default nextConfig;
