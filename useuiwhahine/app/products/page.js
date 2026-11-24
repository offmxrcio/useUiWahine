"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["Todos", "Tops", "Saias", "Coberturas"];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "Todos";

  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "Todos") {
      result = result.filter((product) => product.category === category);
    }

    if (sort === "lowest") result.sort((a, b) => a.price - b.price);
    if (sort === "highest") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [category, sort]);

  return (
    <section className="catalog-page">
      <div className="catalog-banner">
        <span className="eyebrow">U’i Wahine · Coleção</span>
        <h1>Nossa coleção</h1>
        <p>Descubra peças que traduzem a beleza do artesanal.</p>
      </div>

      <div className="catalog-container">
        <div className="catalog-toolbar">
          <div className="filter-list">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={
                  category === item ? "filter-button active" : "filter-button"
                }
              >
                {item}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="sort-select"
            aria-label="Ordenar produtos"
          >
            <option value="default">Ordenar por</option>
            <option value="lowest">Menor preço</option>
            <option value="highest">Maior preço</option>
            <option value="name">Nome</option>
          </select>
        </div>

        <div className="catalog-count">
          {filteredProducts.length} produtos encontrados
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Nenhum produto encontrado</h2>
            <p>Experimente selecionar outra categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="empty-state">Carregando coleção...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
