import type { MetadataRoute } from "next";

const baseUrl = "https://ayra-agrawal-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/experience", "/research/calc-lab", "/work/recall", "/work/tracelab"].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }));
}
