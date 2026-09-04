import { motion } from "motion/react";
import { Link } from "react-router";
import { Product, paths } from "../products";
import { ProductWordmark } from "./ProductWordmark";

export type NavLink = { label: string; to: string };

export function SiteHeader({
  product,
  navLinks,
  cta,
}: {
  product: Product;
  /** Defaults to Privacy + Support for the product. */
  navLinks?: NavLink[];
  /** Defaults to a Download button pointing at the App Store listing. */
  cta?: { label: string; href: string };
}) {
  const p = paths(product);
  const links =
    navLinks ?? [
      { label: "Privacy", to: p.privacy },
      { label: "Support", to: p.support },
    ];
  const action =
    cta ??
    (product.status === "live" && product.appStoreUrl
      ? { label: product.ctaLabel ?? "Download", href: product.appStoreUrl }
      : undefined);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b"
      style={{ borderColor: `${product.accent}1A` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to={p.home}>
          <ProductWordmark product={product} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              style={{
                fontFamily: product.bodyFont,
                color: product.ink,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {!action && product.status === "coming-soon" && (
          <span
            className="px-4 py-2 rounded-full text-xs border"
            style={{
              fontFamily: product.bodyFont,
              color: product.accent,
              borderColor: `${product.accent}33`,
              backgroundColor: `${product.accent}0D`,
            }}
          >
            Coming soon
          </span>
        )}

        {action && (
          <motion.a
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 text-white rounded-full text-sm hover:shadow-lg transition-all duration-300"
            style={{
              backgroundColor: product.ink,
              fontFamily: product.bodyFont,
            }}
          >
            {action.label}
          </motion.a>
        )}
      </div>
    </header>
  );
}
