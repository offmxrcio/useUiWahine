
"use client";

import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const {
    cart,
    loaded,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  if (!loaded) {
    return <div className="empty-state">Carregando carrinho...</div>;
  }

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <div className="empty-cart">
          <ShoppingBag size={48} strokeWidth={1} />
          <span className="eyebrow">SUA SACOLA</span>
          <h1>Seu carrinho está vazio.</h1>
          <p>
            Que tal descobrir algumas peças
            especiais para o seu verão?
          </p>
          <Link href="/products" className="btn-primary">
            Explorar coleção <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <span className="eyebrow">SUA SELEÇÃO</span>
        <h1>Minha sacola</h1>
        <p>{cart.length} tipos de produtos selecionados</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article
              className="cart-item"
              key={`${item.id}-${item.size}`}
            >
              <Link href={`/products/${item.slug}`}>
                <img src={item.image} alt={item.name} />
              </Link>

              <div className="cart-item-info">
                <span className="product-category">
                  {item.category}
                </span>

                <Link href={`/products/${item.slug}`}>
                  <h3>{item.name}</h3>
                </Link>

                <p>Tamanho: {item.size}</p>
                <strong>{formatPrice(item.price)}</strong>

                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.size,
                          item.quantity - 1
                        )
                      }
                      aria-label="Diminuir quantidade"
                    >
                      <Minus size={14} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.size,
                          item.quantity + 1
                        )
                      }
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id, item.size)
                    }
                  >
                    <Trash2 size={15} />
                    Remover
                  </button>
                </div>
              </div>

              <strong className="cart-item-total">
                {formatPrice(item.price * item.quantity)}
              </strong>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Resumo do pedido</h2>

          <div className="summary-line">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>

          <div className="summary-line">
            <span>Frete</span>
            <span>A calcular</span>
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <strong>Total</strong>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>

          <p className="shipping-note">
            O valor do frete será calculado na próxima etapa.
          </p>

          <button
            className="btn-primary checkout-button"
            disabled
          >
            Finalizar compra em breve
            <ArrowRight size={18} />
          </button>

          <Link href="/products" className="continue-shopping">
            Continuar comprando
          </Link>
        </aside>
      </div>
    </section>
  );
}
