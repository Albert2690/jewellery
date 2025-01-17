const productsData = [
  {
    _id: 1,
    rating: 4,
    brandName: "Metallica",
    isWishlist:false,
    label: "19% OFF",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-2-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-1-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-1.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-2.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-4.jpg",
    ],
    category: "Earnings",
    material: "Silver",
    sizes: ["S", "L", "M"],
    status: "Out Of Stock",
    name: "Circle of Light Heart Earrings",
    price: "200",
    oldPrice: "300.00",
    description: "Delicate and timeless, the Circle of Light Heart Earrings are crafted from high-quality silver, designed to symbolize love and light with their intricate heart motif. These earrings are perfect for both daily wear and special occasions, offering an understated elegance that complements any outfit.",
  },
  {
    _id: 2,
    rating: 4,
    brandName: "Metallica",
    isWishlist:true,
    label: "HOT",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-2-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-1-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-2-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-3-150x150.jpg",
    ],
    sizes: ["S", "L", "M"],
    category: "EARNINGS",
    status: "In Stock",
    material: "PLATINUM",
    name: "Blue Stripes & Stone Earrings",
    price: "249.00",
    oldPrice: "300.00",
    description: "A stunning blend of elegance and charm, the Blue Stripes & Stone Earrings feature a unique platinum design accented by vivid blue stones. The striking combination of color and texture makes these earrings a versatile accessory for formal events or everyday glamour.",
  },
  {
    _id: 3,
    rating: 4,
    brandName: "Metallica",
    isWishlist:true,
    label: "20% OFF",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-2-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-1-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-2-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-3-576x576.jpg",
    ],
    sizes: ["S", "L", "M"],
    category: "NECKLACES",
    status: "In Stock",
    material: "DIAMOND",
    name: "Birds of Paradise Pendant",
    price: "159.00",
    oldPrice: "199.00",
    description: "Inspired by nature's beauty, the Birds of Paradise Pendant is a sparkling diamond masterpiece that captures the essence of elegance and grace. Its intricate design showcases the delicate features of the bird, making it a standout addition to any jewelry collection.",
  },
  {
    _id: 4,
    rating: 4,
    brandName: "Metallica",
    isWishlist:true,
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Pandora-Flower-Stem-Earrings-1-360x360.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Pandora-Flower-Stem-Earrings-2-360x360.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Pandora-Flower-Stem-Earrings-1-360x360.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Pandora-Flower-Stem-Earrings-2-360x360.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Pandora-Flower-Stem-Earrings-3-360x360.jpg",
    ],
    sizes: ["S", "L", "M"],
    status: "In Stock",
    category: "EARNINGS",
    material: "GOLD",
    name: "Golden Glow Earrings",
    price: "249.00",
    oldPrice: "300.00",
    description: "Shimmering with a radiant golden hue, the Golden Glow Earrings are a must-have accessory for any special occasion. These earrings exude timeless elegance, designed to catch the light and enhance your natural beauty. With a versatile style, they complement both traditional and modern outfits.",
  },
  {
    _id: 5,
    rating: 4,
    brandName: "Metallica",
    isWishlist:true,
    label: "OUT OF STOCK",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-360x360.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-2-360x360.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-360x360.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-2-360x360.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-3-360x360.jpg",
    ],
    sizes: ["S", "L", "M"],
    status: "In Stock",
    category: "Earnings",
    material: "PLATINUM",
    name: "Blue Stripes & Stone Earrings",
    price: "249.00",
    oldPrice: "300.00",
    description: "Stylish and bold, these Blue Stripes & Stone Earrings are designed with platinum and exude sophistication. The contrasting stripes and detailed craftsmanship add a modern edge, making them ideal for fashion-forward individuals.",
  },
  {
    _id: 6,
    rating: 4,
    brandName: "Metallica",
    isWishlist:true,
    label: "HOT",
    sizes: ["S", "L", "M"],
    status: "In Stock",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-2-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-1-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-2-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-3-576x576.jpg",
    ],
    category: "NECKLACES",
    material: "SILVER",
    name: "Silver Charm Necklace",
    price: "159.00",
    oldPrice: "199.00",
    description: "Sleek and versatile, the Silver Charm Necklace adds a touch of sophistication to both casual and formal attire. Crafted from premium silver, its minimalist design is perfect for layering or wearing solo. Whether it's a dinner date or a casual outing, this necklace ensures you always shine with style.",
  },
  {
    _id: 7,
    rating: 4,
    brandName: "Metallica",
    isWishlist:true,
    label: "25% OFF",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-2-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-1-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-2-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-3-576x576.jpg",
    ],
    category: "RINGS",
    material: "GOLD",
    sizes: ["S", "M"],
    status: "In Stock",
    name: "Sunflower Pendant",
    price: "299.00",
    oldPrice: "399.00",
    description: "Radiating warmth and positivity, the Sunflower Pendant is a gold-crafted masterpiece symbolizing joy and vitality. Its intricate detailing and dazzling finish make it a standout piece for any occasion.",
  },
  {
    _id: 8,
    rating: 5,
    brandName: "Metallica",
    isWishlist:true,
    label: "HOT",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-2-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-1-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-2-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-3-576x576.jpg",
    ],
    category: "RINGS",
    material: "RUBY",
    sizes: ["M", "L"],
    status: "In Stock",
    name: "Elegant Ruby Ring",
    price: "499.00",
    oldPrice: "600.00",
    description: "A stunning statement piece, this Elegant Ruby Ring features a brilliant-cut ruby centerpiece set in precious metal. The deep red gemstone is enhanced by the ring's sophisticated design, making it perfect for special occasions or as an heirloom piece.",
  },
  {
    _id: 9,
    rating: 4,
    brandName: "Metallica",
    isWishlist:true,
    label: "NEW",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-2-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-1-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-2-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-3-576x576.jpg",
    ],
    category: "BRACELETS",
    material: "PLATINUM",
    sizes: ["M", "L"],
    status: "In Stock",
    name: "Platinum Charm Bracelet",
    price: "699.00",
    oldPrice: "800.00",
    description: "This luxurious Platinum Charm Bracelet combines modern elegance with timeless charm. Each link is expertly crafted from high-grade platinum, creating a sophisticated piece that catches the light beautifully. The bracelet features a secure clasp and can be customized with your favorite charms.",
  },
  {
    _id: 10,
    label: "LIMITED",
    isWishlist:true,
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-2-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-2-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-3-576x576.jpg",
    ],
    category: "EARNINGS",
    material: "AMETHYST",
    sizes: ["S", "M"],
    status: "Out Of Stock",
    name: "Amethyst Stud Earrings",
    price: "349.00",
    oldPrice: "400.00",
    description: "This luxurious Platinum Charm Bracelet combines modern elegance with timeless charm. Each link is expertly crafted from high-grade platinum, creating a sophisticated piece that catches the light beautifully. The bracelet features a secure clasp and can be customized with your favorite charms.",
  },
  {
    _id: 11,
    label: "NEW ARRIVAL",
    isWishlist:true,
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-2-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-1-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-2-576x576.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-3-576x576.jpg",
    ],
    category: "RINGS",
    material: "GOLD",
    sizes: ["S", "M", "L"],
    status: "In Stock",
    name: "Brilliant Reflection Ring",
    price: "1299.00",
    oldPrice: "1500.00",
    description: "This luxurious Platinum Charm Bracelet combines modern elegance with timeless charm. Each link is expertly crafted from high-grade platinum, creating a sophisticated piece that catches the light beautifully. The bracelet features a secure clasp and can be customized with your favorite charms.",
  }
];

export default productsData;
