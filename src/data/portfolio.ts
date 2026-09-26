export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  youtubeUrl: string | null;
  visual: "orbit" | "editorial";
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "product-ad-placeholder",
    title: "Product ad placeholder",
    category: "AI Product Ads",
    description: "Demo slot — replace with an approved YouTube video URL.",
    youtubeUrl: null,
    visual: "orbit",
  },
  {
    id: "social-ad-placeholder",
    title: "Social ad placeholder",
    category: "Social Media Ads",
    description: "Demo slot — replace with an approved YouTube video URL.",
    youtubeUrl: null,
    visual: "editorial",
  },
];
