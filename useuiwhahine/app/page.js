import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const HERO_IMAGE = "/images/whahine9.jpeg";
const STORY_IMAGE = "/images/whahine7.jpeg";

const categories = [
  { name: "Tops", image: "/images/whahine13.jpeg" },
  { name: "Saias", image: "/images/whahine7.jpeg" },
  { name: "Coberturas", image: "/images/whahine10.jpeg" },
];

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Feito à mão · Inspirado pelo oceano</span>

          <h1>
            A beleza de ser
            <br />
            <em>única.</em>
          </h1>

          <p>
            Uma expressão de liberdade, delicadeza e personalidade. Fios que
            se transformam em peças autorais, inspiradas pelo ritmo do mar e
            pela luz do sol.
          </p>

          <Link href="/products" className="btn-primary">
            Descubra a coleção
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="hero-stamp">
          <img src={HERO_IMAGE} alt="Bolero Areia em crochê caramelo" />
          <span className="orbit">feito com intenção</span>
        </div>
      </section>

      <div className="wave-divider after-hero" aria-hidden="true">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,70 C180,130 300,10 480,65 S780,130 960,70 S1260,10 1440,70 L1440,150 L0,150Z" />
          <path d="M1440,70 C1620,130 1740,10 1920,65 S2220,130 2400,70 S2700,10 2880,70 L2880,150 L1440,150Z" />
        </svg>
        <svg className="wave2" viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,85 C180,25 330,145 510,85 S840,25 1020,85 S1260,145 1440,85 L1440,150 L0,150Z" />
          <path d="M1440,85 C1620,25 1770,145 1950,85 S2280,25 2460,85 S2700,145 2880,85 L2880,150 L1440,150Z" />
        </svg>
      </div>

      <div className="paper">
        <section className="benefits">
          <div>Feito à mão</div>
          <div>Peças únicas</div>
          <div>Do P ao GG</div>
          <div>Personalizamos para você</div>
        </section>

        <section className="section categories-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Encontre seu estilo</span>
              <h2>Explore nossas categorias</h2>
            </div>

            <Link href="/products" className="text-link">
              Ver coleção <ArrowRight size={17} />
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name}`}
                className="category-card"
              >
                <img src={category.image} alt={category.name} />
                <div>
                  <span>Coleção</span>
                  <h3>{category.name}</h3>
                  <ArrowUpRight size={22} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section products-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Seleção especial</span>
              <h2>Peças que encantam</h2>
              <p>Escolhas especiais para viver o melhor do verão.</p>
            </div>

            <Link href="/products" className="text-link">
              Ver todos <ArrowRight size={17} />
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      <section className="brand-story">
        <div className="story-image">
          <img src={STORY_IMAGE} alt="Saia Duna em crochê com franjas" />
        </div>

        <div className="story-content">
          <span className="eyebrow">Nossa essência</span>
          <h2>
            Mais do que vestir.
            <br />
            <em>Uma forma de sentir.</em>
          </h2>

          <p>
            A <strong>U’i Wahine</strong> nasceu para unir o significado de
            “mulher bela” ao toque afetivo do feito à mão. Criamos roupas de
            crochê únicas e originais, tecidas ponto a ponto, com a brisa do
            mar e a luz do sol como inspiração.
          </p>

          <p>
            Nossa grade vai do <strong>P ao GG</strong>, e personalizamos cada
            peça para que ela seja o reflexo exato da sua essência.
          </p>

          <div className="signature">Com carinho, U’i Wahine.</div>

          <Link href="/products" className="btn-primary">
            Conheça nossa coleção
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="manifesto">
        <span className="eyebrow">U’i Wahine · Nossa maneira de criar</span>
        <blockquote>
          “A exclusividade está nos detalhes.
          <br />A beleza, em <em>ser você.</em>”
        </blockquote>
      </section>
    </>
  );
}