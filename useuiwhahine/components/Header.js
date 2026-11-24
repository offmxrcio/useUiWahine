"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Início" },
  { href: "/products", label: "Coleção" },
  { href: "/products?category=Vestidos", label: "Vestidos" },
  { href: "/products?category=Tops", label: "Tops" },
  { href: "/products?category=Conjuntos", label: "Conjuntos" },
];

export default function Header() {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="announcement">
        Feito à mão · Inspirado pelo oceano
      </div>

      <div className="header-main">
        <Link href="/" className="logo" aria-label="U’i Wahine — página inicial">
          <Image
            src="/images/whahinelogo.jfif"
            alt=""
            width={46}
            height={46}
            priority
          />
          <span>U’i Wahine</span>
        </Link>

        <nav
          className={open ? "navigation open" : "navigation"}
          aria-label="Principal"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link
            href="/cart"
            className="cart-button"
            aria-label={`Carrinho, ${cartCount} ${cartCount === 1 ? "item" : "itens"}`}
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="cart-counter">{cartCount}</span>
            )}
          </Link>

          <button
            className="icon-button mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </header>
  );
}