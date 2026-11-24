import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      <div className="wave-divider to-footer" aria-hidden="true">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,70 C180,130 300,10 480,65 S780,130 960,70 S1260,10 1440,70 L1440,150 L0,150Z" />
          <path d="M1440,70 C1620,130 1740,10 1920,65 S2220,130 2400,70 S2700,10 2880,70 L2880,150 L1440,150Z" />
        </svg>
        <svg className="wave2" viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,85 C180,25 330,145 510,85 S840,25 1020,85 S1260,145 1440,85 L1440,150 L0,150Z" />
          <path d="M1440,85 C1620,25 1770,145 1950,85 S2280,25 2460,85 S2700,145 2880,85 L2880,150 L1440,150Z" />
        </svg>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Image src="/images/whahinelogo.jfif" alt="" width={54} height={54} />
              U’i Wahine
            </Link>

            <p>
              A beleza do artesanal em cada detalhe. Feito para acompanhar você
              em todos os momentos do verão.
            </p>

            <a href="https://www.instagram.com/useuiwahine_/" aria-label="Instagram" className="social-link">
              <InstagramIcon size={20} />
            </a>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link href="/">Início</Link>
            <Link href="/products">Coleção</Link>
            <Link href="/products?category=Vestidos">Vestidos</Link>
            <Link href="/products?category=Tops">Tops</Link>
          </div>

          <div className="footer-column">
            <h4>Atendimento</h4>
            <a href="mailto:contato@useuiwhahine.com.br">
              <Mail size={15} /> E-mail
            </a>
            <Link href="/cart">Meu carrinho</Link>
          </div>

          <div className="footer-column">
            <h4>Sobre a marca</h4>
            <p>
              Moda feminina, crochê e autenticidade. Cada peça conta uma
              história.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 U’i Wahine. Todos os direitos reservados.</span>
          <span>A essência da mulher bela</span>
        </div>
      </footer>
    </>
  );
}