import { Link } from "react-router";
import { Product, paths } from "../products";
import { ProductWordmark } from "./ProductWordmark";
import type { NavLink } from "./SiteHeader";

export function SiteFooter({
  product,
  links,
}: {
  product: Product;
  /** Defaults to Privacy Policy + Terms of Use + Support for the product. */
  links?: NavLink[];
}) {
  const p = paths(product);
  const footerLinks =
    links ?? [
      { label: "Privacy Policy", to: p.privacy },
      { label: "Terms of Use", to: p.terms },
      { label: "Support", to: p.support },
    ];

  return (
    <footer
      className="py-16 px-6 border-t"
      style={{ backgroundColor: product.surface, borderColor: `${product.accent}1A` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to={p.home}>
            <ProductWordmark product={product} />
          </Link>

          <div className="flex gap-8 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  color: product.ink,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p
            className="text-xs opacity-30"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: product.ink,
            }}
          >
            {product.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
