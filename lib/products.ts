export type ProductCategory = {
  key: "grains" | "oilseeds" | "feed" | "other"
  items: string[]
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    key: "grains",
    items: ["wheat", "barley", "corn", "oats", "rye", "buckwheat"],
  },
  {
    key: "oilseeds",
    items: ["sunflowerSeeds", "sunflowerOil", "rapeseed", "soybeans", "sunflowerMeal", "soybeanMeal"],
  },
  {
    key: "feed",
    items: ["poultry", "cattle", "aquaculture"],
  },
  {
    key: "other",
    items: ["fish", "vegetableFats", "dairy"],
  },
]

// Maps a product item key to its image file name in /public/images/products
export const PRODUCT_IMAGE: Record<string, string> = {
  wheat: "wheat",
  barley: "barley",
  corn: "corn",
  oats: "oats",
  rye: "rye",
  buckwheat: "buckwheat",
  sunflowerSeeds: "sunflower-seeds",
  sunflowerOil: "sunflower-oil",
  rapeseed: "rapeseed",
  soybeans: "soybeans",
  sunflowerMeal: "sunflower-meal",
  soybeanMeal: "soybean-meal",
  poultry: "poultry-feed",
  cattle: "cattle-feed",
  aquaculture: "aquaculture-feed",
  fish: "fish-seafood",
  vegetableFats: "vegetable-fats",
  dairy: "dairy",
}
