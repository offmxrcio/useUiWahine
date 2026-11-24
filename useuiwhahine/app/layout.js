import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "U’i Wahine | A essência da mulher bela",
  description:
    "U’i Wahine — moda em crochê feita à mão, inspirada pelo oceano e pela beleza natural do Havaí.",
};

export const viewport = {
  themeColor: "#d9bd99",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <CartProvider>
          <div className="site">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}