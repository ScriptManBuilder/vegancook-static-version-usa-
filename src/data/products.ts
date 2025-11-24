// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов копирайтинга
  return `/images/img_1.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем copywriting изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview (10-second previews for catalog)
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/vid10sec/1 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 2) {
    return "/videos/vid10sec/2 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 3) {
    return "/videos/vid10sec/3 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 4) {
    return "/videos/vid10sec/4 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 5) {
    return "/videos/vid10sec/5 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 6) {
    return "/videos/vid10sec/8 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 7) {
    return "/videos/vid10sec/9 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 8) {
    return "/videos/vid10sec/10 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 9) {
    return "/videos/vid10sec/12 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 10) {
    return "/videos/vid10sec/13 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 11) {
    return "/videos/vid10sec/18 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 12) {
    return "/videos/vid10sec/1 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 13) {
    return "/videos/vid10sec/2 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 14) {
    return "/videos/vid10sec/3 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 15) {
    return "/videos/vid10sec/4 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 16) {
    return "/videos/vid10sec/5 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  if (productId === 17) {
    return "/videos/vid10sec/8 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_10sec.mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 1-7: 1 video each ($1-$49.99)
  if (productId >= 1 && productId <= 7) {
    const videoMap: { [key: number]: string } = {
      1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "8", 7: "9"
    };
    return [`/videos/vid5min/${videoMap[productId]} Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4`];
  }
  
  // Courses 8-10: 3 videos each ($59.99-$79.99)
  if (productId === 8) {
    return [
      "/videos/vid5min/10 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/12 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/13 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/vid5min/18 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/1 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/2 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/vid5min/3 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/4 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/5 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  
  // Courses 11-15: 4 videos each ($89.99-$129.99)
  if (productId === 11) {
    return [
      "/videos/vid5min/8 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/9 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/10 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/12 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  if (productId === 12) {
    return [
      "/videos/vid5min/13 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/18 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/1 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/2 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  if (productId === 13) {
    return [
      "/videos/vid5min/3 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/4 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/5 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/8 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  if (productId === 14) {
    return [
      "/videos/vid5min/9 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/10 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/12 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/13 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  if (productId === 15) {
    return [
      "/videos/vid5min/18 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/1 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/2 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/3 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  
  // Courses 16-17: 5 videos each ($139.99)
  if (productId === 16) {
    return [
      "/videos/vid5min/4 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/5 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/8 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/9 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/10 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  if (productId === 17) {
    return [
      "/videos/vid5min/12 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/13 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/18 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/1 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4",
      "/videos/vid5min/2 Vegan Holiday Meals - Cooking for Family and Friends Almond Tree_5min_compressed.mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Welcome - Class Overview",
    price: 1.00,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    videos: getProductVideos(1),
    description: "Introduction to vegan holiday cooking with course expectations and overview of festive plant-based recipes.",
    detailedDescription: "Welcome to Almond Tree Kitchen's vegan cooking class! This introduction covers all gluten-free, easy-to-follow recipes for creating delicious festive treats. Learn about the course structure featuring colorful vegan dips, substantial main dishes, favorite sides, and elegant desserts. Perfect for beginners and experienced cooks preparing holiday meals for family and friends.",
    category: "Course Introduction",
    features: [
      "Course overview and expectations",
      "Seasonal produce introduction",
      "Recipe preparation basics",
      "Holiday meal planning guide",
      "Getting started in vegan cooking"
    ],
    specifications: {
      "Duration": "2 minutes 12 seconds",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Course Introduction",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Five Vegan Dips",
    price: 6.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    videos: getProductVideos(2),
    description: "Master five colorful vegan dip recipes - perfect appetizers with unique flavors and beautiful presentations.",
    detailedDescription: "Create five stunning vegan dips: slow-cooked spicy carrot with cinnamon and cumin, roasted red pepper with white beans, green herby dip with spinach and avocado, purple beet dip with caraway, and creamy nutty chickpea hummus. Each recipe makes 8 servings, perfect for parties or formal meals. Learn techniques for blending smooth textures and balancing flavors.",
    category: "Appetizers",
    features: [
      "Five unique dip recipes",
      "Colorful presentations",
      "Flavor balancing techniques",
      "Perfect party appetizers",
      "Easy make-ahead options"
    ],
    specifications: {
      "Duration": "3 minutes 1 second",
      "Level": "Beginner",
      "Focus": "Appetizers & Dips",
      "Topics": "Flavor combinations, texture, presentation",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Vegan Meatballs with Tomato Sauce",
    price: 9.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    videos: getProductVideos(3),
    description: "Learn to make delicious vegan meatballs with red beans and cranberries served in fresh tomato sauce.",
    detailedDescription: "Master the art of creating flavorful vegan meatballs using red beans, dried cranberries, and mushrooms. Learn techniques for achieving perfect texture and binding, plus how to make a rich fresh tomato sauce with herbs. Serves 8 people. Ideal as a hearty main dish with professional presentation techniques.",
    category: "Main Dishes",
    features: [
      "Bean and cranberry meatballs",
      "Fresh tomato sauce mastery",
      "Texture and binding techniques",
      "Herb flavor combinations",
      "Professional plating methods"
    ],
    specifications: {
      "Duration": "4 minutes 41 seconds",
      "Level": "Beginner",
      "Focus": "Main Course Preparation",
      "Tools": "Food processor, large pan, mixing bowl",
      "Access": "10 months",
      "Bonus": "Sauce variations guide"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Vegan Pumpkin Quiche",
    price: 19.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    videos: getProductVideos(4),
    description: "Master vegan quiche creation with nutty crispy base, herby pumpkin batter, spinach and caramelized onions.",
    detailedDescription: "Learn to create a stunning vegan quiche with gluten-free almond pastry base, creamy pumpkin-herb batter filling, wilted spinach, caramelized red onions, and beautiful tomato topping. Serves 8 generous portions. Master techniques for pastry pressing, batter whisking, and perfect baking.",
    category: "Main Dishes",
    features: [
      "Gluten-free pastry mastery",
      "Pumpkin batter techniques",
      "Vegetable layering methods",
      "Perfect baking temperature control",
      "Professional quiche construction"
    ],
    specifications: {
      "Duration": "3 minutes 34 seconds",
      "Level": "Intermediate",
      "Focus": "Baking, pastry, savory filling",
      "Techniques": "Pastry pressing, layering, baking",
      "Access": "8 months",
      "Bonus": "Pastry troubleshooting guide"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Nut Roast with Onion Gravy",
    price: 29.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Traditional vegan nut roast with mung beans, mushrooms, sage and walnuts, served with rich onion gravy.",
    detailedDescription: "Master this holiday classic featuring mung beans, walnuts, mushrooms, dried apricots, and fresh sage. Learn nut roast construction, pressing techniques, and rich onion gravy with balsamic and miso. Serves 8 generous portions. Perfect centerpiece for festive meals.",
    category: "Main Dishes",
    features: [
      "Traditional nut roast mastery",
      "Bean and nut binding techniques",
      "Rich onion gravy preparation",
      "Professional loaf construction",
      "Festive presentation methods"
    ],
    specifications: {
      "Duration": "8 minutes 15 seconds",
      "Level": "Advanced",
      "Focus": "Traditional holiday main, gravy making",
      "Projects": "Nut roast and gravy exercises",
      "Access": "10 months",
      "Bonus": "Gravy variations guide"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Shepherd's Pie with Lentils",
    price: 39.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Hearty vegan shepherd's pie with lentils, shiitake mushrooms, and creamy mashed potato topping.",
    detailedDescription: "Master this comfort food classic. Learn to prepare savory lentil and shiitake filling with root vegetables, miso, and mustard, topped with golden mashed potatoes. Serves 6-8 portions. Perfect make-ahead dish for family gatherings.",
    category: "Main Dishes",
    features: [
      "Lentil and mushroom filling",
      "Creamy mashed potato top",
      "Root vegetable techniques",
      "Make-ahead preparation",
      "Golden browning methods"
    ],
    specifications: {
      "Duration": "8 minutes 33 seconds",
      "Level": "Intermediate",
      "Focus": "Comfort food, layering, baking",
      "Applications": "Family meals, batch cooking, reheating",
      "Access": "12 months",
      "Support": "Filling variations library"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Vegan Wellington",
    price: 49.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Spectacular vegan Wellington with sweet potato, spiced cabbage, rice and mushroom in walnut pastry.",
    detailedDescription: "Master this challenging showstopper. Create colorful layers: sweet potato center, wilted greens, mushroom-rice confit, wrapped in spiced red cabbage, all encased in walnut gluten-free pastry. Advanced hands-on techniques for impressive presentation.",
    category: "Advanced Mains",
    features: [
      "Complex layering techniques",
      "Walnut pastry construction",
      "Spiced cabbage wrapping",
      "Sweet potato preparation",
      "Professional presentation"
    ],
    specifications: {
      "Duration": "7 minutes 9 seconds",
      "Level": "Advanced",
      "Focus": "Pastry work, layering, advanced techniques",
      "Applications": "Special occasions, impressive centerpiece",
      "Access": "12 months",
      "Bonus": "Troubleshooting guide"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Side Dishes: Coleslaw & Hasselback Potatoes",
    price: 59.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master essential sides: fresh coleslaw with chive dressing and crispy Hasselback potatoes with herbs.",
    detailedDescription: "Comprehensive training with 3 detailed modules covering fresh coleslaw with tahini-chive dressing, perfectly sliced Hasselback potatoes with garlic and herbs, roasted roots with wilted greens, and crispy potato croquettes. Essential techniques for perfect holiday sides.",
    category: "Side Dishes",
    features: [
      "3 detailed video modules",
      "Fresh coleslaw mastery",
      "Hasselback cutting techniques",
      "Roasted root vegetables",
      "Crispy croquettes",
      "Multiple side dish options"
    ],
    specifications: {
      "Duration": "13 minutes 56 seconds",
      "Videos": "3 detailed modules",
      "Level": "Beginner to Intermediate",
      "Focus": "Side dishes, knife skills, roasting",
      "Techniques": "Slicing, roasting, dressing making",
      "Access": "12 months",
      "Bonus": "Sides pairing guide"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Elegant Desserts: Mousse & Cookies",
    price: 69.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master delicate desserts: light pumpkin mousse served in glass and thin orange-almond cookies.",
    detailedDescription: "Premium course with 3 comprehensive modules covering elegant pumpkin mousse with aquafaba, thin soft-bite orange almond cookies, and advanced dessert presentation techniques. Quick to make yet impressive desserts perfect for entertaining.",
    category: "Desserts",
    features: [
      "3 comprehensive video modules",
      "Aquafaba whipping techniques",
      "Pumpkin mousse mastery",
      "Gluten-free cookie baking",
      "Glass dessert presentation",
      "Make-ahead dessert strategies"
    ],
    specifications: {
      "Duration": "18 minutes 43 seconds",
      "Videos": "3 comprehensive modules",
      "Level": "Intermediate",
      "Focus": "Light desserts, elegant presentation, aquafaba",
      "Techniques": "Whipping, folding, precise baking",
      "Access": "15 months",
      "Bonus": "Dessert garnishing guide"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Premium Desserts: Pecan Pie & Cheesecake",
    price: 79.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master premium desserts: rich caramel pecan pie and mandarin chocolate no-bake cheesecake.",
    detailedDescription: "Advanced dessert mastery with 3 detailed modules. Create creamy pecan pie with toasted caramel and almond crust, plus elegant mandarin chocolate cheesecake with cashew cream filling and dark chocolate base. Professional techniques for stunning presentations.",
    category: "Premium Desserts",
    features: [
      "3 detailed video modules",
      "Caramel pecan pie mastery",
      "No-bake cheesecake techniques",
      "Cashew cream preparation",
      "Almond pastry crusts",
      "Professional dessert plating"
    ],
    specifications: {
      "Duration": "16 minutes 57 seconds",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Focus": "Premium desserts, no-bake techniques",
      "Techniques": "Caramel, cashew cream, layering",
      "Access": "15 months",
      "Bonus": "Dessert troubleshooting guide"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Complete Vegan Holiday Cooking Mastery",
    price: 89.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master complete vegan holiday cooking - from appetizers to desserts, including all techniques for festive plant-based meals.",
    detailedDescription: "Achieve complete vegan holiday cooking mastery with comprehensive training. This premium course includes 4 comprehensive modules covering five colorful dips, vegan meatballs, pumpkin quiche, nut roast with gravy, shepherd's pie, spectacular Wellington, essential sides (coleslaw, Hasselback potatoes, roasted roots, croquettes), elegant mousses and cookies, plus premium desserts (pecan pie, cheesecake, snow puddings, Black Forest gateau). Everything you need for perfect vegan holiday entertaining.",
    category: "Complete Mastery",
    features: [
      "4 comprehensive video modules",
      "Complete holiday menu mastery",
      "All appetizer techniques",
      "Main dish preparation",
      "Essential sides and accompaniments",
      "Elegant dessert collection",
      "Advanced pastry skills",
      "Professional entertaining strategies"
    ],
    specifications: {
      "Duration": "9 minutes 51 seconds",
      "Videos": "4 comprehensive modules",
      "Level": "Beginner to Expert",
      "Coverage": "Complete vegan holiday cooking techniques",
      "Skills": "Full festive meal mastery & plant-based expertise",
      "Access": "18 months",
      "Bonus": "Complete recipe collection & meal planning guide"
    },
    inStock: true
  },
  {
    id: 12,
    name: "Advanced Vegan Baking Techniques",
    price: 99.99,
    image: getProductImage(12),
    images: getProductImages(12),
    video: getProductVideo(12),
    videos: getProductVideos(12),
    description: "Master advanced vegan baking with professional techniques for breads, pastries, and specialty items.",
    detailedDescription: "Professional vegan baking mastery with 4 comprehensive modules covering sourdough starters, laminated pastries, gluten-free techniques, and specialty breads. Learn temperature control, yeast management, and professional finishing methods.",
    category: "Advanced Baking",
    features: [
      "4 comprehensive video modules",
      "Sourdough mastery",
      "Laminated pastry techniques",
      "Gluten-free baking",
      "Professional bread making",
      "Temperature control methods"
    ],
    specifications: {
      "Duration": "22 minutes 15 seconds",
      "Videos": "4 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Professional baking techniques",
      "Access": "18 months",
      "Bonus": "Professional baking guide"
    },
    inStock: true
  },
  {
    id: 13,
    name: "Vegan Cheese & Fermentation Mastery",
    price: 109.99,
    image: getProductImage(13),
    images: getProductImages(13),
    video: getProductVideo(13),
    videos: getProductVideos(13),
    description: "Create artisan vegan cheeses and master fermentation techniques for cultured foods.",
    detailedDescription: "Master artisan vegan cheese making with 4 detailed modules. Learn cultured cashew cheeses, aged nut cheeses, fermented vegetables, and probiotic-rich foods. Professional aging and flavor development techniques included.",
    category: "Fermentation",
    features: [
      "4 detailed video modules",
      "Cultured cheese techniques",
      "Fermentation mastery",
      "Aging methods",
      "Probiotic food creation",
      "Flavor development"
    ],
    specifications: {
      "Duration": "25 minutes 30 seconds",
      "Videos": "4 detailed modules",
      "Level": "Advanced",
      "Focus": "Cheese making, fermentation",
      "Access": "18 months",
      "Bonus": "Aging and storage guide"
    },
    inStock: true
  },
  {
    id: 14,
    name: "International Vegan Cuisine Collection",
    price: 119.99,
    image: getProductImage(14),
    images: getProductImages(14),
    video: getProductVideo(14),
    videos: getProductVideos(14),
    description: "Explore global vegan cuisine with authentic recipes from Asia, Mediterranean, and Latin America.",
    detailedDescription: "Comprehensive international cuisine training with 4 modules covering Asian stir-fries and dumplings, Mediterranean mezze and pastas, Latin American tacos and empanadas, and authentic spice blending techniques.",
    category: "International Cuisine",
    features: [
      "4 comprehensive video modules",
      "Asian cooking techniques",
      "Mediterranean recipes",
      "Latin American specialties",
      "Authentic spice blending",
      "Cultural cooking methods"
    ],
    specifications: {
      "Duration": "28 minutes 45 seconds",
      "Videos": "4 comprehensive modules",
      "Level": "Intermediate to Advanced",
      "Focus": "Global vegan cuisines",
      "Access": "20 months",
      "Bonus": "Spice blending guide"
    },
    inStock: true
  },
  {
    id: 15,
    name: "Vegan Restaurant & Catering Business",
    price: 129.99,
    image: getProductImage(15),
    images: getProductImages(15),
    video: getProductVideo(15),
    videos: getProductVideos(15),
    description: "Start and run a successful vegan restaurant or catering business with professional strategies.",
    detailedDescription: "Complete business mastery with 4 modules covering menu development, cost control, kitchen operations, food safety certification, marketing strategies, and scaling your vegan food business professionally.",
    category: "Business & Professional",
    features: [
      "4 detailed video modules",
      "Menu development",
      "Cost control strategies",
      "Kitchen management",
      "Food safety certification",
      "Marketing and scaling"
    ],
    specifications: {
      "Duration": "32 minutes 20 seconds",
      "Videos": "4 detailed modules",
      "Level": "Professional",
      "Focus": "Business operations, management",
      "Access": "24 months",
      "Bonus": "Business templates & checklists"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Vegan Nutrition & Meal Planning Expert",
    price: 139.99,
    image: getProductImage(16),
    images: getProductImages(16),
    video: getProductVideo(16),
    videos: getProductVideos(16),
    description: "Master vegan nutrition science and create balanced meal plans for optimal health.",
    detailedDescription: "Comprehensive nutrition mastery with 5 modules covering macronutrient balancing, micronutrient optimization, sports nutrition, therapeutic diets, supplement guidance, and professional meal planning for diverse dietary needs.",
    category: "Nutrition & Health",
    features: [
      "5 comprehensive video modules",
      "Complete nutrition science",
      "Meal planning mastery",
      "Sports nutrition",
      "Therapeutic diet creation",
      "Supplement guidance"
    ],
    specifications: {
      "Duration": "35 minutes 10 seconds",
      "Videos": "5 comprehensive modules",
      "Level": "Professional",
      "Focus": "Nutrition science, meal planning",
      "Access": "24 months",
      "Bonus": "Meal planning templates"
    },
    inStock: true
  },
  {
    id: 17,
    name: "Master Vegan Chef Certification Program",
    price: 139.99,
    image: getProductImage(17),
    images: getProductImages(17),
    video: getProductVideo(17),
    videos: getProductVideos(17),
    description: "Complete professional certification program covering all aspects of vegan culinary arts.",
    detailedDescription: "Ultimate certification program with 5 comprehensive modules covering advanced techniques, knife skills, plating artistry, flavor balancing, kitchen leadership, and complete culinary mastery. Includes professional certification upon completion.",
    category: "Professional Certification",
    features: [
      "5 comprehensive video modules",
      "Professional certification",
      "Advanced culinary techniques",
      "Knife skills mastery",
      "Plating and presentation",
      "Kitchen leadership training",
      "Complete culinary mastery"
    ],
    specifications: {
      "Duration": "40 minutes 25 seconds",
      "Videos": "5 comprehensive modules",
      "Level": "Expert / Professional",
      "Focus": "Complete culinary certification",
      "Access": "Lifetime",
      "Bonus": "Professional chef certification"
    },
    inStock: true
  }
];
