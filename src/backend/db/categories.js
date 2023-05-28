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
    url: "https://upload.wikimedia.org/wikipedia/commons/3/32/IPhone_X_vector.svg",
  },
  {
    _id: uuid(),
    categoryName: "iPad",
    description: "Lovable. Drawable. Magical",
    url: "https://img.freepik.com/free-vector/digital-device-mockup_53876-89357.jpg?w=740&t=st=1685013849~exp=1685014449~hmac=a67e76008cb7f27138fe3d895e638599434b24fadbef5cfbb951f2b9a5d79f10",
  },
  {
    _id: uuid(),
    categoryName: "Galaxy Tab",
    description: "Space for limitless possibilities",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/32/IPhone_X_vector.svg",
  },
  {
    _id: uuid(),
    categoryName: "IEMs",
    description: "Music as the Artist Intended.",
    url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Moondrop-Blessing-3-02.jpg?v=1681201798&width=800",
  },
];
