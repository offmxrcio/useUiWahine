
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        href={`/products/${product.slug}`}
        className="product-image"
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-image-primary"
        />
        <img
          src={product.images[1]}
          alt={`${product.name}, outra vista`}
          className="product-image-secondary"
          aria-hidden="true"
        />

        {product.oldPrice && (
          <span className="product-tag">Oferta</span>
        )}

        <span className="product-quick-view">
          <ShoppingBag size={16} />
          Ver produto
        </span>
      </Link>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <Link href={`/products/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>

        <div className="product-prices">
          <strong>{formatPrice(product.price)}</strong>

          {product.oldPrice && (
            <del>{formatPrice(product.oldPrice)}</del>
          )}
        </div>
      </div>
    </article>
  );
}
