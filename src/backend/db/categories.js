import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "iPhone",
    description: "The looongest battery life of any iPhone. Ever",
    url: "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "iPad",
    description: "Lovable. Drawable. Magical",
    url: "https://m.media-amazon.com/images/I/61goypdjAYL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Galaxy Tab",
    description: "Space for limitless possibilities",
    url: "https://m.media-amazon.com/images/I/818zWwTXYsL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "IEMs",
    description: "Music as the Artist Intended.",
    url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Moondrop-Blessing-3-02.jpg?v=1681201798&width=800",
  },
];
