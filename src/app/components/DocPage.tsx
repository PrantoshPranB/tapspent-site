import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { Product, paths } from "../products";
import { ProductWordmark } from "./ProductWordmark";

export type DocSection = { heading: string; body: ReactNode };

/**
 * Narrow, text-first shell used by the Privacy, Terms and Support pages of every product.
 */
export function DocPage({
  product,
  title,
  description,
  intro,
  sections,
  lastUpdated,
}: {
  product: Product;
  title: string;
  description: string;
  /** Optional lead paragraph shown above the first section. */
  intro?: ReactNode;
  sections: DocSection[];
  lastUpdated: string;
}) {
  const p = paths(product);

  return (
    <>
      <Helmet>
        <title>{`${title} — ${product.name}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link to={p.home}>
              <ProductWordmark product={product} />
            </Link>
            <Link to={p.home} className="text-sm text-gray-600 hover:text-gray-900">
              Back to Home
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="mb-12"
              style={{
                fontFamily: product.heading.fontFamily,
                fontWeight: product.heading.fontWeight,
                letterSpacing: product.heading.letterSpacing,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: "1.2",
                color: product.ink,
              }}
            >
              {title}
            </h1>

            <div
              className="space-y-8"
              style={{
                fontFamily: product.bodyFont,
                color: product.ink,
                lineHeight: "1.7",
              }}
            >
              {intro && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="opacity-70 space-y-4 -mt-4"
                >
                  {intro}
                </motion.div>
              )}

              {sections.map((section, i) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
                  {/* Bodies may be rich JSX — headings, lists, tables — so this is a div, not a p. */}
                  <div className="opacity-70 space-y-4">
                    {typeof section.body === "string" ? <p>{section.body}</p> : section.body}
                  </div>
                </motion.section>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-8 border-t border-gray-200"
              >
                <p className="text-sm opacity-50">Last updated: {lastUpdated}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
