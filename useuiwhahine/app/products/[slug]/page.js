
"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Check,
} from "lucide-react";

import { products, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const product = products.find(
    (item) => item.slug === params.slug
  );

  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="empty-state">
        <h2>Produto não encontrado</h2>
        <Link href="/products" className="text-link">
          Voltar para a coleção
        </Link>
      </div>
    );
  }

  function handleAddToCart() {
    addToCart(product, selectedSize, quantity);
    setAdded(true);
  }

  return (
    <section className="detail-page">
      <div className="detail-breadcrumb">
        <Link href="/">Início</Link>
        <span>/</span>
        <Link href="/products">Coleção</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="detail-container">
        <div className="detail-gallery">
          <div className="detail-thumbnails">
            {product.images.map((image, index) => (
              <button
                key={image}
                className={
                  selectedImage === index ? "selected" : ""
                }
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>

          <div className="detail-main-image">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
            />
          </div>
        </div>

        <div className="detail-info">
          <span className="eyebrow">{product.category}</span>

          <h1>{product.name}</h1>

          <div className="detail-price">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && (
              <del>{formatPrice(product.oldPrice)}</del>
            )}
          </div>

          <p className="detail-description">
            {product.description}
          </p>

          <div className="detail-divider" />

          <div className="detail-option">
            <div className="option-heading">
              <span>Tamanho</span>
              <span>{selectedSize}</span>
            </div>

            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={
                    selectedSize === size ? "selected" : ""
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="detail-option">
            <span>Quantidade</span>

            <div className="quantity-control">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Diminuir quantidade"
              >
                <Minus size={16} />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Aumentar quantidade"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <button
            className="btn-primary add-cart-button"
            onClick={handleAddToCart}
          >
            {added ? <Check size={19} /> : <ShoppingBag size={19} />}
            {added ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
          </button>

          {added && (
            <button
              className="text-link continue-cart"
              onClick={() => router.push("/cart")}
            >
              Ir para o carrinho
            </button>
          )}

          <div className="detail-divider" />

          <div className="product-extra">
            <p><strong>Cor:</strong> {product.color}</p>
            <p><strong>Categoria:</strong> {product.category}</p>
            <p><strong>Estilo:</strong> Moda artesanal feminina</p>
          </div>
        </div>
      </div>

      <div className="back-to-products">
        <Link href="/products">
          <ArrowLeft size={17} /> Voltar para a coleção
        </Link>
      </div>
    </section>
  );
}
