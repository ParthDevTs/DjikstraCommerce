import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "iPhone 14",
    price: 91000,
    memory: 128,
    currency: "INR",
    category: "iPhone",
    details: `
        128 GB ROM
        15.49 cm (6.1 inch) Liquid Retina HD Display
        12MP + 12MP | 12MP Front Camera
        A13 Bionic Chip Processor`,
    imgUrl:
      "https://img.freepik.com/premium-vector/smartphone-mockup-modern-frame-less-smartphones-generic-cell-phone-device-side_625492-759.jpg?w=740",
  },
  {
    _id: uuid(),
    name: "iPhone 11",
    price: 51000,
    memory: 64,
    currency: "INR",
    category: "iPhone",
    details:
      " 64 GB ROM 15.49 cm (6.1 inch) Liquid Retina HD Display 12MP + 12MP | 12MP Front Camera A13 Bionic Chip Processor",
    imgUrl:
      "https://img.freepik.com/premium-vector/smartphone-mockup-modern-frame-less-smartphones-generic-cell-phone-device-side_625492-759.jpg?w=740",
  },
  {
    _id: uuid(),
    name: "iPhone XR",
    price: 41000,
    memory: 64,
    currency: "INR",
    category: "iPhone",
    details: `
        64 GB ROM
        15.5 cm (6.102 inch) Display
        12MP Rear Camera | 7MP Front Camera
        A12 Bionic Chip Processor
        iOS 13 Compatible`,
    imgUrl:
      "https://img.freepik.com/premium-vector/smartphone-mockup-modern-frame-less-smartphones-generic-cell-phone-device-s_ide_625492-759.jpg?w=740",
  },
  {
    _id: uuid(),
    name: "iPhone 12",
    price: 81000,
    memory: 128,
    currency: "INR",
    category: "iPhone",
    details: `
        128 GB ROM
        15.49 cm (6.1 inch) Super Retina XDR Display
        12MP + 12MP | 12MP Front Camera
        A14 Bionic Chip with Next Generation Neural Engine Processor
        Ceramic Shield
        IP68 Water Resistance
        All Screen OLED Display`,
    imgUrl:
      "https://img.freepik.com/premium-vector/smartphone-mockup-modern-frame-less-smartphones-generic-cell-phone-device-side_625492-759.jpg?w=740",
  },
  {
    _id: uuid(),
    name: "iPhone SE",
    price: 37999,
    memory: 128,
    currency: "INR",
    category: "iPhone",
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A13 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl:
      "https://img.freepik.com/premium-vector/smartphone-mockup-modern-frame-less-smartphones-generic-cell-phone-device-side_625492-759.jpg?w=740",
  },
  {
    _id: uuid(),
    name: "iPhone 13",
    price: 77999,
    memory: 128,
    currency: "INR",
    category: "iPhone",
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A16 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl:
      "https://img.freepik.com/premium-vector/smartphone-mockup-modern-frame-less-smartphones-generic-cell-phone-device-side_625492-759.jpg?w=740",
  },
  {
    _id: uuid(),
    name: "Galaxy Tab S8",
    price: 77999,
    memory: 128,
    currency: "INR",
    category: "Galaxy Tab",
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A16 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl:
      "data:image/jpeg;base64,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",
  },
  {
    _id: uuid(),
    name: "iPad",
    price: 77999,
    memory: 128,
    currency: "INR",
    category: "iPad",
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A16 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl:
      "https://preview.free3d.com/img/2016/12/2174837922698626082/pwqph7gc.jpg",
  },
  {
    _id: uuid(),
    name: "iPad Air",
    price: 77999,
    memory: 128,
    currency: "INR",
    category: "iPad",
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A16 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl:
      "https://preview.free3d.com/img/2016/12/2174837922698626082/pwqph7gc.jpg",
  },
  {
    _id: uuid(),
    name: "iPad Pro",
    price: 77999,
    memory: 128,
    currency: "INR",
    category: "iPad",
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A16 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl:
      "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/1/1/11-inch128gbipadprowi-ficelluar-spacegrey_1.png",
  },
];
