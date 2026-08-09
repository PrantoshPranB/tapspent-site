import { Product } from "../products";

export function ProductWordmark({
  product,
  className = "h-8",
}: {
  product: Product;
  className?: string;
}) {
  if (product.logo) {
    return <img src={product.logo} alt={product.name} className={`${className} cursor-pointer`} />;
  }

  const [lead, tail] = product.wordmarkParts ?? [product.name, ""];

  return (
    <span
      className={`${className} flex items-center cursor-pointer`}
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "1.4rem",
        fontWeight: 800,
        lineHeight: "1",
        letterSpacing: "-0.04em",
        color: product.ink,
      }}
    >
      {lead}
      {tail && <span style={{ color: product.accent }}>{tail}</span>}
    </span>
  );
}
