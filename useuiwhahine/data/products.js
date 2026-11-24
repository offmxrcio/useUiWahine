/*
  Cada produto usa um par de fotos em /public/images:
  a primeira é a capa e a segunda aparece na galeria.
  ATENÇÃO: os preços abaixo são provisórios. Ajuste para os valores reais.
*/
const img = (n) => `/images/whahine${n}.jpeg`;
const sizes = ["P", "M", "G", "GG"];

export const products = [
  {
    id: 1,
    slug: "top-croche-esmeralda",
    name: "Top Esmeralda",
    category: "Tops",
    price: 169.9,
    oldPrice: null,
    description:
      "Top tomara que caia em crochê verde com franjas longas que balançam a cada movimento. Amarração nas costas para ajustar ao seu corpo.",
    color: "Verde esmeralda",
    sizes,
    image: img(1),
    images: [img(1), img(2)],
    featured: true,
  },
  {
    id: 2,
    slug: "top-croche-hibisco",
    name: "Top Hibisco",
    category: "Tops",
    price: 149.9,
    oldPrice: null,
    description:
      "Top frente-única em crochê coral, delicado e feminino, com pequenas pérolas na trama e lacinhos de cetim na barra.",
    color: "Coral",
    sizes,
    image: img(3),
    images: [img(3), img(4)],
    featured: false,
  },
  {
    id: 3,
    slug: "top-croche-koa",
    name: "Top Koa",
    category: "Tops",
    price: 159.9,
    oldPrice: null,
    description:
      "Top em crochê caramelo com alças arrematadas por contas de madeira, amarração nas costas e visual natural e acolhedor.",
    color: "Caramelo",
    sizes,
    image: img(5),
    images: [img(5), img(6)],
    featured: false,
  },
  {
    id: 4,
    slug: "saia-croche-duna",
    name: "Saia Duna",
    category: "Saias",
    price: 289.9,
    oldPrice: null,
    description:
      "Saia longa com cós em crochê de pontos abertos e franjas até os pés, com aberturas laterais. Movimento e presença em cada passo.",
    color: "Terracota",
    sizes,
    image: img(7),
    images: [img(7), img(8)],
    featured: true,
  },
  {
    id: 5,
    slug: "bolero-croche-areia",
    name: "Bolero Areia",
    category: "Coberturas",
    price: 219.9,
    oldPrice: null,
    description:
      "Bolero em crochê de malha aberta na cor caramelo, com mangas amplas e caimento solto. Perfeito para vestir sobre biquínis e saídas de praia.",
    color: "Caramelo",
    sizes,
    image: img(9),
    images: [img(9), img(10)],
    featured: false,
  },
  {
    id: 6,
    slug: "top-croche-rubi",
    name: "Top Rubi",
    category: "Tops",
    price: 139.9,
    oldPrice: null,
    description:
      "Top frente-única em crochê vermelho, com costas abertas e amarração fina. Leve, marcante e fácil de combinar com jeans.",
    color: "Vermelho",
    sizes,
    image: img(11),
    images: [img(11), img(12)],
    featured: false,
  },
  {
    id: 7,
    slug: "top-croche-oceano",
    name: "Top Oceano",
    category: "Tops",
    price: 179.9,
    oldPrice: null,
    description:
      "Top frente-única em crochê azul royal com detalhe em macramê na barra, que desenha uma trama aberta e artesanal.",
    color: "Azul royal",
    sizes,
    image: img(13),
    images: [img(13), img(14)],
    featured: true,
  },
  {
    id: 8,
    slug: "top-croche-lagoa",
    name: "Top Lagoa",
    category: "Tops",
    price: 149.9,
    oldPrice: null,
    description:
      "Top frente-única em crochê azul-turquesa, de trama aberta e acabamento delicado. A cor do mar para os dias de sol.",
    color: "Azul-turquesa",
    sizes,
    image: img(15),
    images: [img(15), img(16)],
    featured: false,
  },
  {
    id: 9,
    slug: "top-croche-perola",
    name: "Top Pérola",
    category: "Tops",
    price: 199.9,
    oldPrice: null,
    description:
      "Top frente-única em crochê verde oliva com franjas de pérolas. Uma peça de brilho sutil, feita para chamar atenção nos detalhes.",
    color: "Verde oliva",
    sizes,
    image: img(17),
    images: [img(17), img(18)],
    featured: true,
  },
];

export function formatPrice(price) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
