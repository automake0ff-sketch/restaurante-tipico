export type Allergen = "gluten" | "lactose" | "eggs" | "fish" | "shellfish" | "nuts" | "soy" | "sesame" | "mustard" | "celery" | "sulphites";
export type DietaryTag = "vegetarian" | "vegan" | "spicy" | "gluten-free" | "seafood" | "meat" | "seasonal";
export type Category = "tapas" | "entrantes" | "principales" | "especialidades" | "postres" | "bebidas";

export interface Dish {
  id: string;
  name: string;
  nameEn?: string;
  nameFr?: string;
  description: string;
  descriptionEn?: string;
  descriptionFr?: string;
  category: Category;
  price: number | null; // null = pendiente de confirmación
  image: string;
  ingredients: string[];
  allergens: Allergen[];
  tags: DietaryTag[];
  available: boolean;
  featured?: boolean;
  sourceNote?: string;
}

export const categories: { id: Category; label: string; labelEn: string; labelFr: string }[] = [
  { id: "tapas", label: "Tapas", labelEn: "Tapas", labelFr: "Tapas" },
  { id: "entrantes", label: "Entrantes", labelEn: "Starters", labelFr: "Entrées" },
  { id: "principales", label: "Platos principales", labelEn: "Main courses", labelFr: "Plats principaux" },
  { id: "especialidades", label: "Especialidades", labelEn: "Specialties", labelFr: "Spécialités" },
  { id: "postres", label: "Postres", labelEn: "Desserts", labelFr: "Desserts" },
  { id: "bebidas", label: "Bebidas", labelEn: "Drinks", labelFr: "Boissons" },
];

export const menu: Dish[] = [
  {
    id: "papas-alinas-melva",
    name: "Papas aliñás con melva",
    nameEn: "Seasoned potatoes with melva",
    nameFr: "Pommes de terre assaisonnées à la melva",
    description: "Clásico andaluz de patatas aliñadas con melva de calidad.",
    descriptionEn: "Classic Andalusian seasoned potatoes with quality melva.",
    descriptionFr: "Classique andalou de pommes de terre assaisonnées à la melva de qualité.",
    category: "tapas",
    price: null,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    ingredients: ["Patata", "Melva", "Cebolla", "Aceite de oliva", "Vinagre"],
    allergens: ["fish"],
    tags: ["seafood"],
    available: true,
    featured: true,
    sourceNote: "Producto mencionado en reseñas y directorios públicos. Precio e ingredientes detallados pendientes de confirmación oficial.",
  },
  {
    id: "ensaladilla-pollo",
    name: "Ensaladilla de pollo",
    nameEn: "Chicken potato salad",
    nameFr: "Salade de pommes de terre au poulet",
    description: "Ensaladilla con pollo y emulsión de curry mango (versión contemporánea citada en prensa).",
    descriptionEn: "Potato salad with chicken and curry-mango emulsion (contemporary version mentioned in press).",
    descriptionFr: "Salade de pommes de terre au poulet et émulsion curry-mangue (version contemporaine citée dans la presse).",
    category: "tapas",
    price: null,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    ingredients: ["Patata", "Pollo", "Mayonesa", "Curry", "Mango"],
    allergens: ["eggs"],
    tags: ["meat"],
    available: true,
    sourceNote: "Mencionada en artículos de prensa local. Datos completos pendientes de confirmación.",
  },
  {
    id: "salmorejo",
    name: "Salmorejo",
    nameEn: "Salmorejo",
    nameFr: "Salmorejo",
    description: "Salmorejo cordobés clásico. También se menciona versión de remolacha en reseñas.",
    descriptionEn: "Classic Córdoba-style salmorejo. A beetroot version is also mentioned in reviews.",
    descriptionFr: "Salmorejo classique de Cordoue. Une version à la betterave est également mentionnée dans les avis.",
    category: "tapas",
    price: null,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
    ingredients: ["Tomate", "Pan", "Ajo", "Aceite de oliva", "Huevo", "Jamón"],
    allergens: ["gluten", "eggs"],
    tags: [],
    available: true,
    featured: true,
    sourceNote: "Producto recurrente en reseñas. Precio e ingredientes exactos pendientes de confirmación.",
  },
  {
    id: "tartar-atun",
    name: "Tartar de atún",
    nameEn: "Tuna tartare",
    nameFr: "Tartare de thon",
    description: "Tartar de atún fresco, una de las especialidades más citadas.",
    descriptionEn: "Fresh tuna tartare, one of the most frequently mentioned specialties.",
    descriptionFr: "Tartare de thon frais, l'une des spécialités les plus citées.",
    category: "especialidades",
    price: null,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    ingredients: ["Atún", "Aceite de oliva", "Cebolleta", "Limón"],
    allergens: ["fish"],
    tags: ["seafood"],
    available: true,
    featured: true,
    sourceNote: "Muy mencionado en reseñas de clientes y prensa. Precio pendiente de confirmación oficial.",
  },
  {
    id: "papas-bravas",
    name: "Papas bravas",
    nameEn: "Patatas bravas",
    nameFr: "Pommes de terre bravas",
    description: "Patatas bravas con salsa picante y alioli.",
    descriptionEn: "Patatas bravas with spicy sauce and aioli.",
    descriptionFr: "Pommes de terre bravas avec sauce piquante et aïoli.",
    category: "tapas",
    price: null,
    image: "https://images.unsplash.com/photo-1630384060421-5987283f9b14?w=800&q=80",
    ingredients: ["Patata", "Salsa brava", "Alioli"],
    allergens: ["eggs"],
    tags: ["vegetarian", "spicy"],
    available: true,
    sourceNote: "Producto típico citado. Datos completos pendientes.",
  },
  {
    id: "pulpo-gallega",
    name: "Pulpo a la gallega",
    nameEn: "Galician-style octopus",
    nameFr: "Poulpe à la galicienne",
    description: "Pulpo a la gallega, a menudo sobre parmentier según reseñas.",
    descriptionEn: "Galician-style octopus, often served over parmentier according to reviews.",
    descriptionFr: "Poulpe à la galicienne, souvent servi sur parmentier selon les avis.",
    category: "especialidades",
    price: null,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a5d0?w=800&q=80",
    ingredients: ["Pulpo", "Patata", "Pimentón", "Aceite de oliva"],
    allergens: ["shellfish"],
    tags: ["seafood"],
    available: true,
    featured: true,
    sourceNote: "Frecuentemente elogiado en reseñas. Precio pendiente de confirmación.",
  },
  {
    id: "albondigas-choco",
    name: "Albóndigas de choco",
    nameEn: "Cuttlefish meatballs",
    nameFr: "Boulettes de seiche",
    description: "Albóndigas de choco en salsa, especialidad muy mencionada.",
    descriptionEn: "Cuttlefish meatballs in sauce, a frequently mentioned specialty.",
    descriptionFr: "Boulettes de seiche en sauce, spécialité très souvent mentionnée.",
    category: "especialidades",
    price: null,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80",
    ingredients: ["Choco", "Pan", "Huevo", "Especias", "Salsa"],
    allergens: ["gluten", "eggs", "shellfish"],
    tags: ["seafood"],
    available: true,
    sourceNote: "Mencionado en reseñas y artículos. Datos oficiales pendientes.",
  },
  {
    id: "carrillada-iberica",
    name: "Carrillada ibérica",
    nameEn: "Iberian pork cheek",
    nameFr: "Joue de porc ibérique",
    description: "Carrillada ibérica estofada, plato estrella según múltiples reseñas.",
    descriptionEn: "Braised Iberian pork cheek, a star dish according to multiple reviews.",
    descriptionFr: "Joue de porc ibérique braisée, plat star selon de nombreux avis.",
    category: "principales",
    price: null,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    ingredients: ["Carrillada ibérica", "Vino", "Verduras"],
    allergens: ["sulphites"],
    tags: ["meat"],
    available: true,
    featured: true,
    sourceNote: "Muy elogiada en reseñas de clientes. Precio e ingredientes exactos pendientes de confirmación.",
  },
  {
    id: "lingote-cochinillo",
    name: "Lingote de cochinillo",
    nameEn: "Suckling pig loin",
    nameFr: "Lingot de cochon de lait",
    description: "Lingote de cochinillo con exterior crujiente, destacado en reseñas recientes.",
    descriptionEn: "Suckling pig loin with crispy exterior, highlighted in recent reviews.",
    descriptionFr: "Lingot de cochon de lait à l'extérieur croustillant, mis en avant dans les avis récents.",
    category: "especialidades",
    price: null,
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80",
    ingredients: ["Cochinillo"],
    allergens: [],
    tags: ["meat"],
    available: true,
    featured: true,
    sourceNote: "Mencionado como plato estrella en reseñas. Precio pendiente de confirmación oficial.",
  },
  {
    id: "gnocchi-gorgonzola",
    name: "Gnocchi de gorgonzola",
    nameEn: "Gorgonzola gnocchi",
    nameFr: "Gnocchis au gorgonzola",
    description: "Gnocchi con salsa de gorgonzola.",
    descriptionEn: "Gnocchi with gorgonzola sauce.",
    descriptionFr: "Gnocchis à la sauce gorgonzola.",
    category: "principales",
    price: null,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    ingredients: ["Patata", "Harina", "Gorgonzola", "Nata"],
    allergens: ["gluten", "lactose"],
    tags: ["vegetarian"],
    available: true,
    sourceNote: "Producto listado en directorios. Datos completos pendientes de confirmación.",
  },
  {
    id: "croquetas-jamon",
    name: "Croquetas de jamón",
    nameEn: "Ham croquettes",
    nameFr: "Croquettes au jambon",
    description: "Croquetas de jamón caseras. También se mencionan de gambas al ajillo.",
    descriptionEn: "Homemade ham croquettes. Prawn versions are also mentioned.",
    descriptionFr: "Croquettes au jambon maison. Des versions aux crevettes sont également mentionnées.",
    category: "tapas",
    price: null,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
    ingredients: ["Jamón", "Bechamel", "Pan rallado"],
    allergens: ["gluten", "lactose", "eggs"],
    tags: ["meat"],
    available: true,
    sourceNote: "Producto clásico muy citado. Precio pendiente de confirmación.",
  },
  {
    id: "solomillo-whisky",
    name: "Solomillo al whisky",
    nameEn: "Sirloin with whisky sauce",
    nameFr: "Filet de bœuf sauce whisky",
    description: "Solomillo al whisky. También versiones Idiazábal y otras citadas.",
    descriptionEn: "Sirloin with whisky sauce. Idiazábal and other versions are also mentioned.",
    descriptionFr: "Filet sauce whisky. Des versions Idiazábal et autres sont également citées.",
    category: "principales",
    price: null,
    image: "https://images.unsplash.com/photo-1558030006-450675393f4a?w=800&q=80",
    ingredients: ["Solomillo", "Whisky", "Nata"],
    allergens: ["lactose", "sulphites"],
    tags: ["meat"],
    available: true,
    featured: true,
    sourceNote: "Especialidad muy mencionada en reseñas. Precio pendiente de confirmación oficial.",
  },
  {
    id: "magret-pato",
    name: "Magret de pato",
    nameEn: "Duck magret",
    nameFr: "Magret de canard",
    description: "Magret de pato.",
    descriptionEn: "Duck magret.",
    descriptionFr: "Magret de canard.",
    category: "principales",
    price: null,
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80",
    ingredients: ["Magret de pato"],
    allergens: [],
    tags: ["meat"],
    available: true,
    sourceNote: "Listado en directorios públicos. Datos completos pendientes de confirmación.",
  },
  {
    id: "gambas-ajillo",
    name: "Gambas al ajillo",
    nameEn: "Garlic prawns",
    nameFr: "Crevettes à l'ail",
    description: "Gambas al ajillo clásicas.",
    descriptionEn: "Classic garlic prawns.",
    descriptionFr: "Crevettes à l'ail classiques.",
    category: "tapas",
    price: null,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a5d0?w=800&q=80",
    ingredients: ["Gambas", "Ajo", "Guindilla", "Aceite de oliva"],
    allergens: ["shellfish"],
    tags: ["seafood", "spicy"],
    available: true,
    sourceNote: "Producto típico citado en reseñas. Precio pendiente de confirmación.",
  },
  // Bebidas de ejemplo (genéricas)
  {
    id: "cerveza",
    name: "Cerveza de barril",
    nameEn: "Draught beer",
    nameFr: "Bière pression",
    description: "Cerveza de barril bien fría.",
    descriptionEn: "Cold draught beer.",
    descriptionFr: "Bière pression bien fraîche.",
    category: "bebidas",
    price: null,
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80",
    ingredients: [],
    allergens: [],
    tags: [],
    available: true,
    sourceNote: "Producto genérico de barra. Precio pendiente de confirmación.",
  },
  {
    id: "vino-tinto",
    name: "Vino tinto (copa)",
    nameEn: "Red wine (glass)",
    nameFr: "Vin rouge (verre)",
    description: "Copa de vino tinto de la casa.",
    descriptionEn: "Glass of house red wine.",
    descriptionFr: "Verre de vin rouge de la maison.",
    category: "bebidas",
    price: null,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    ingredients: [],
    allergens: ["sulphites"],
    tags: [],
    available: true,
    sourceNote: "Producto genérico. Precio y referencia pendientes de confirmación.",
  },
];

export function getDishById(id: string): Dish | undefined {
  return menu.find((d) => d.id === id);
}

export function getDishesByCategory(cat: Category): Dish[] {
  return menu.filter((d) => d.category === cat && d.available);
}

export function filterDishes(filters: {
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  spicy?: boolean;
  category?: Category | "all";
}): Dish[] {
  return menu.filter((d) => {
    if (!d.available) return false;
    if (filters.category && filters.category !== "all" && d.category !== filters.category) return false;
    if (filters.vegetarian && !d.tags.includes("vegetarian") && !d.tags.includes("vegan")) return false;
    if (filters.vegan && !d.tags.includes("vegan")) return false;
    if (filters.glutenFree && d.allergens.includes("gluten")) return false;
    if (filters.spicy && !d.tags.includes("spicy")) return false;
    return true;
  });
}
