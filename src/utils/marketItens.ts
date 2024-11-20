import UUID from "react-native-uuid";


export type MarketItem = {
  id: string;
  url: string;
  name: string;
  species: string;
  price: number;
  description: string;
};

export const marketData: MarketItem[] = [
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/aloe-vera.png',
    name: 'Aloe Vera',
    species: 'Aloe Vera',
    price: 25.99,
    description: 'Aloe Vera é uma planta medicinal popular conhecida por seus usos em cuidados com a pele e cabelo. Fácil de cuidar, ela também purifica o ar.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/snake-plant.png',
    name: 'Snake Plant',
    species: 'Sansevieria',
    price: 19.99,
    description: 'A Snake Plant é resistente e requer pouca manutenção. Ideal para interiores, ajuda a melhorar a qualidade do ar e adiciona elegância ao ambiente.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/peace-lily.png',
    name: 'Peace Lily',
    species: 'Spathiphyllum',
    price: 30.5,
    description: 'O Peace Lily é uma planta elegante com flores brancas. Perfeito para quem deseja um toque de sofisticação e purificação de ar no ambiente.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/fern.png',
    name: 'Fern',
    species: 'Nephrolepis exaltata',
    price: 15.99,
    description: 'A Fern é uma planta exuberante, que traz frescor e beleza para qualquer espaço interno ou externo.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/rose.png',
    name: 'Rose',
    species: 'Rosa',
    price: 35.99,
    description: 'A Rose é uma flor clássica, símbolo de romance e beleza. Perfeita para presentes e decoração.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/cactus.png',
    name: 'Cactus',
    species: 'Cactaceae',
    price: 12.99,
    description: 'O Cactus é uma planta de baixa manutenção, ideal para quem não tem muito tempo para cuidar das plantas.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/lavender.png',
    name: 'Lavender',
    species: 'Lavandula angustifolia',
    price: 18.99,
    description: 'Lavender é uma planta aromática, conhecida por suas propriedades calmantes e seu aroma relaxante.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/orchid.png',
    name: 'Orchid',
    species: 'Orchidaceae',
    price: 50.0,
    description: 'A Orchid é uma planta sofisticada, conhecida por suas flores exóticas e cores vibrantes.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/succulent.png',
    name: 'Succulent',
    species: 'Crassulaceae',
    price: 8.99,
    description: 'As Succulent são plantas suculentas que retêm água, ideais para quem tem pouco tempo para regá-las.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/ivy.png',
    name: 'Ivy',
    species: 'Hedera helix',
    price: 22.99,
    description: 'Ivy é uma planta trepadeira que pode ser cultivada tanto em ambientes internos quanto externos.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/lily.png',
    name: 'Lily',
    species: 'Lilium',
    price: 28.0,
    description: 'A Lily é uma flor delicada e elegante, popular para decorações e arranjos florais.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/bamboo.png',
    name: 'Bamboo',
    species: 'Bambusoideae',
    price: 23.99,
    description: 'O Bamboo é uma planta de crescimento rápido e resistente, ideal para decoração e Feng Shui.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/tulip.png',
    name: 'Tulip',
    species: 'Tulipa',
    price: 40.0,
    description: 'As Tulips são flores vibrantes, famosas por suas cores variadas e formas delicadas.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/chrysanthemum.png',
    name: 'Chrysanthemum',
    species: 'Chrysanthemum morifolium',
    price: 12.49,
    description: 'Chrysanthemum, ou crisântemo, é uma planta ornamental que traz cor e frescor aos ambientes.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/geranium.png',
    name: 'Geranium',
    species: 'Pelargonium',
    price: 14.99,
    description: 'O Geranium é uma planta vibrante, muito utilizada em jardins e como planta de interior.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/bougainvillea.png',
    name: 'Bougainvillea',
    species: 'Bougainvillea glabra',
    price: 18.0,
    description: 'A Bougainvillea é uma planta trepadeira que exibe flores vibrantes e é ideal para jardins.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/jade.png',
    name: 'Jade',
    species: 'Crassula ovata',
    price: 23.5,
    description: 'A planta Jade é conhecida por suas folhas espessas e formato arbustivo, ideal para cultivo em ambientes internos.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/sunflower.png',
    name: 'Sunflower',
    species: 'Helianthus annuus',
    price: 19.49,
    description: 'O Girassol é uma flor alegre e vibrante, símbolo de verão e energia positiva.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/hydrangea.png',
    name: 'Hydrangea',
    species: 'Hydrangea macrophylla',
    price: 36.0,
    description: 'A Hydrangea é uma planta ornamental conhecida por suas grandes flores em diversas cores.',
  },
  {
    id: UUID.v4() as string,
    url: 'https://example.com/images/azalea.png',
    name: 'Azalea',
    species: 'Rhododendron',
    price: 29.99,
    description: 'A Azalea é uma planta de flores vibrantes, muito apreciada em jardins e decorações de primavera.',
  }
];