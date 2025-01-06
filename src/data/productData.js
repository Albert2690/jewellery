const productsData = [
  {
    _id: 1,
    rating: 4,
    brandName: "Metallica",
    label: "19% OFF",
    image:
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-2-576x576.jpg",
    image1:
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-1-576x576.jpg",
    subImages: [
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-1.jpg",
      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-2.jpg",

      "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-4.jpg",
    ],
    category: "Earnings",
    material: "Silver ",
    sizes: ["S", "L", "M"],
    status: "Out Of Stock",
    name: "Circle of Light Heart Earrings",
    price: 200,
    button: "ADD TO CART",
    description:
      "Delicate and timeless, the Circle of Light Heart Earrings are crafted from high-quality silver, designed to symbolize love and light with their intricate heart motif. These earrings are perfect for both daily wear and special occasions, offering an understated elegance that complements any outfit. Their lightweight design ensures comfort while making a bold statement of sophistication and charm.",
  },
 


  {
    _id: 5,
    rating: 4,
    brandName: "Metallica",
    label: "OUT OF STOCK",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-360x360.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-2-360x360.jpg",
    sizes: ["S", "L", "M"],
    status: "In Stock",
    category: "EARNINGS",
    material: "PLATINUM",
    name: "Blue Stripes & Stone Earrings",
    price: "$249.00",
    description:
      "Stylish and bold, these Blue Stripes & Stone Earrings are designed with platinum and exude sophistication. The contrasting stripes and detailed craftsmanship add a modern edge, making them ideal for fashion-forward individuals. Their lightweight and durable design makes them a perfect blend of comfort and luxury.",
  },

  {
    _id: 7,
    rating: 4,
    brandName: "Metallica",
    label: "25% OFF",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-1-576x576.jpg",
      image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-2-576x576.jpg",
      category: "RING",
   
    material: "GOLD",
    sizes: ["S", "M"],
    status: "In Stock",
    name: "Sunflower Pendant",
    price: "$299.00",
    oldPrice: "$399.00",
    description:
      "Radiating warmth and positivity, the Sunflower Pendant is a gold-crafted masterpiece symbolizing joy and vitality. Its intricate detailing and dazzling finish make it a standout piece for any occasion. Wear it to spread sunshine and elevate your outfit with an accessory as bright as your personality.",
  },
  {
    _id: 2,
    rating: 4,
    brandName: "Metallica",
    label: "HOT",
    image: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-1-576x576.jpg",
      image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-2-576x576.jpg",
    sizes: ["S", "L", "M"],
    category: "EARNINGS",
    status: "In Stock",
    material: "PLATINUM",
    name: "Blue Stripes & Stone Earrings",
    price: "$249.00",
    description:
      "A stunning blend of elegance and charm, the Blue Stripes & Stone Earrings feature a unique platinum design accented by vivid blue stones. The striking combination of color and texture makes these earrings a versatile accessory for formal events or everyday glamour. Elevate your style with these timeless earrings, meticulously crafted for a flawless finish.",
  },
  {
    _id: 6,
    rating: 4,
    brandName: "Metallica",
    label: "HOT",
    sizes: ["S", "L", "M"],
    status: "In Stock",
    image: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-1-576x576.jpg",
    image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-2-576x576.jpg",
    category: "NECKLACES",
    material: "SILVER",
    name: "Silver Charm Necklace",
    price: "$159.00",
    oldPrice: "$199.00",
    description:
      "Sleek and versatile, the Silver Charm Necklace adds a touch of sophistication to both casual and formal attire. Crafted from premium silver, its minimalist design is perfect for layering or wearing solo. Whether it’s a dinner date or a casual outing, this necklace ensures you always shine with style.",
  },
  {
    _id: 4,
    rating: 4,
    brandName: "Metallica",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Pandora-Flower-Stem-Earrings-1-360x360.jpg",
    image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Pandora-Flower-Stem-Earrings-2-360x360.jpg",
    sizes: ["S", "L", "M"],
    status: "In Stock",
    category: "EARNINGS",
    material: "GOLD",
    name: "Golden Glow Earrings",
    price: "$249.00",
    description:
      "Shimmering with a radiant golden hue, the Golden Glow Earrings are a must-have accessory for any special occasion. These earrings exude timeless elegance, designed to catch the light and enhance your natural beauty. With a versatile style, they complement both traditional and modern outfits, ensuring you always look your best.",
  },

  {
    _id: 3,
    rating: 4,
    brandName: "Metallica",
    label: "20% OFF",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-1-576x576.jpg",
    image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-2-576x576.jpg",
    sizes: ["S", "L", "M"],
    status: "In Stock",
    category: "NECKLACES",
    material: "DIAMOND",
    name: "Birds of Paradise Pendant",
    price: "$159.00",
    oldPrice: "$199.00",
    description:
      "Inspired by nature’s beauty, the Birds of Paradise Pendant is a sparkling diamond masterpiece that captures the essence of elegance and grace. Its intricate design showcases the delicate features of the bird, making it a standout addition to any jewelry collection. Pair it with your favorite outfit for a touch of luxury that’s bound to turn heads.",
  },
  {
    id: 8,
    label: "HOT",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-2-576x576.jpg",
    category: "RINGS",
    material: "RUBY",
    sizes: ["M", "L"],
    status: "In Stock",
    name: "Elegant Ruby Ring",
    price: "$499.00"
  },
  {
    id: 9,
    label: "NEW",
    image: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-1-576x576.jpg",
    image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-2-576x576.jpg",
    category: "BRACELETS",
    material: "PLATINUM",
    sizes: ["M", "L"],
    status: "In Stock",
    name: "Platinum Charm Bracelet",
    price: "$699.00"
  },
  {
    id: 10,
    label: "LIMITED",
    image: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-576x576.jpg",
    image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-2-576x576.jpg",
    category: "EARNINGS",
    material: "AMETHYST",
    sizes: ["S", "M"],
    status: "Out Of Stock",
    name: "Amethyst Stud Earrings",
    price: "$349.00"
  },
  {
    id: 11,
    label: "NEW ARRIVAL",
    image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-1-576x576.jpg",
    image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-2-576x576.jpg",
    category: "RINGS",
    material: "GOLD",
    sizes: ["S", "M", "L"],
    status: "In Stock",
    name: "Brilliant Reflection Ring",
    price: "$1299.00"
  }
];

export default productsData;
