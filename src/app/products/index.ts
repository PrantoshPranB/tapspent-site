import tapspentLogo from "../../imports/TapSpent_Logo_Text-2.png";

export type Product = {
  /** URL segment for the product. Empty string means the product lives at the site root. */
  slug: string;
  name: string;
  /** Wordmark image. When omitted, the product name is rendered as a text wordmark. */
  logo?: string;
  /** Splits the text wordmark so the second half takes the accent colour, e.g. Card|Box. */
  wordmarkParts?: [string, string];
  /** Font for body copy, navigation and UI text. */
  bodyFont: string;
  /** Display font for page headings. */
  heading: { fontFamily: string; fontWeight: number; letterSpacing: string };
  tagline: string;
  /** "live" shows Download buttons; "coming-soon" shows a neutral badge instead. */
  status: "live" | "coming-soon";
  appStoreUrl?: string;
  /** Label for the App Store button. Defaults to "Download". */
  ctaLabel?: string;
  supportEmail: string;
  /** Link / highlight colour */
  accent: string;
  /** Body and heading colour */
  ink: string;
  /** Page background */
  surface: string;
};

export const tapspent: Product = {
  slug: "",
  name: "TapSpent",
  logo: tapspentLogo,
  tagline: "Mindful spending made simple",
  bodyFont: "Inter, system-ui, sans-serif",
  heading: { fontFamily: '"Instrument Serif", serif', fontWeight: 400, letterSpacing: "-0.02em" },
  status: "live",
  appStoreUrl: "https://apps.apple.com/app/tapspent/id6771104622",
  supportEmail: "support@tapspent.in",
  accent: "#6B7C5E",
  ink: "#3A3D35",
  surface: "#F5F3ED",
};

export const cardbox: Product = {
  slug: "cardbox",
  name: "CardBox",
  wordmarkParts: ["Card", "Box"],
  tagline: "All your cards. One secure place.",
  bodyFont: '"Montserrat Alternates", system-ui, sans-serif',
  heading: {
    fontFamily: '"Montserrat Alternates", system-ui, sans-serif',
    fontWeight: 800,
    letterSpacing: "-0.035em",
  },
  status: "live",
  appStoreUrl: "https://apps.apple.com/in/app/cardbox-wallet/id6799706630",
  ctaLabel: "Download now",
  supportEmail: "support@tapspent.in",
  accent: "#4F5BF5",
  ink: "#14161F",
  surface: "#EEF1FA",
};

export function paths(product: Product) {
  const base = product.slug ? `/${product.slug}` : "";
  return {
    home: base || "/",
    privacy: `${base}/privacy`,
    terms: `${base}/terms`,
    support: `${base}/support`,
  };
}
