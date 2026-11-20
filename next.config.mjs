import { italianRouteSlugs } from "./i18n/routeSlugs.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        ...Object.entries(italianRouteSlugs).map(([route, slug]) => ({
          source: `/it${slug}/:path*`,
          destination: `${route}/:path*`,
        })),
        { source: "/:locale(it|en)/:path*", destination: "/:path*" },
      ],
    };
  },
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: ["mixed-decls", "legacy-js-api"],
  },
};

export default nextConfig;
