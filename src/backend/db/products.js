import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "iPhone 14",
    price: 81000,
    salePrice: "",
    memory: 128,
    currency: "INR",
    category: "iPhone",
    newLaunch: false,
    details: `
        128 GB ROM
        15.49 cm (6.1 inch) Liquid Retina HD Display
        12MP + 12MP | 12MP Front Camera
        A13 Bionic Chip Processor`,
    imgUrl:
      "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    _id: uuid(),
    name: "iPhone 11",
    price: 51000,
    salePrice: "",
    memory: 64,
    currency: "INR",
    category: "iPhone",
    newLaunch: false,
    details:
      " 64 GB ROM 15.49 cm (6.1 inch) Liquid Retina HD Display 12MP + 12MP | 12MP Front Camera A13 Bionic Chip Processor",
    imgUrl:
      "https://img.freepik.com/premium-vector/smartphone-mockup-modern-frame-less-smartphones-generic-cell-phone-device-side_625492-759.jpg?w=740",
  },
  {
    _id: uuid(),
    name: "iPhone 12",
    price: 61000,
    salePrice: "",
    memory: 128,
    currency: "INR",
    category: "iPhone",
    newLaunch: false,
    details: `
        128 GB ROM
        15.49 cm (6.1 inch) Super Retina XDR Display
        12MP + 12MP | 12MP Front Camera
        A14 Bionic Chip with Next Generation Neural Engine Processor
        Ceramic Shield
        IP68 Water Resistance
        All Screen OLED Display`,
    imgUrl: "https://m.media-amazon.com/images/I/711wsjBtWeL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    name: "iPhone SE",
    price: 37999,
    salePrice: "",
    memory: 128,
    currency: "INR",
    category: "iPhone",
    newLaunch: false,
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A13 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl: "https://m.media-amazon.com/images/I/61A0Zu4K-TL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    name: "iPhone 13",
    price: 71999,
    salePrice: "",
    memory: 128,
    currency: "INR",
    category: "iPhone",
    newLaunch: false,
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A16 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl: "https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    name: "Galaxy Tab S8",
    price: 50999,
    salePrice: "",
    memory: 128,
    currency: "INR",
    category: "Galaxy Tab",
    newLaunch: false,
    details: `
        1et more out of life with Galaxy Tab S8, a premium tablet that helps you crush the day. Discover new ways to work with the 2-in-1 capabilities of a tablet and a PC - DeX creates a desktop experience on your tablet, and 365 integration lets you create and edit documents like you would on a PC. Rock the day with serious performance power, including an impressive Qualcomm Snapdragon chipset and an all-day battery. Inspire your imagination with our fastest S pen yet, with near-zero latency to feel even more like a real pen - it's included with purchase. Go for hours on a single charge¹ and back to 100% quickly with the fast-charging USB-C port. Get ready for 11" of dazzling optical amazement with a dynamic LCD screen that delivers next-level brilliance, crispness and color. Record videos in super-clear 4K with an ultra-wide dual front camera that's twice as good at capturing the moments in life you love the most. Wether you're remote learning or working or chatting with a friend, take your video chats to the next level with high resolution, an ultra-wide camera with auto framing and three mics with noise cancellation. Answer calls. Bring your Samsung Notes from your Galaxy Z fold3 5G to your Tab S8+.`,
    imgUrl: "https://m.media-amazon.com/images/I/818zWwTXYsL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    name: "iPad",
    price: 40999,
    salePrice: "",
    memory: 128,
    currency: "INR",
    category: "iPad",
    newLaunch: false,
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A16 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl: "https://m.media-amazon.com/images/I/61goypdjAYL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    name: "iPad Air",
    price: 55999,
    salePrice: "",
    memory: 128,
    currency: "INR",
    category: "iPad",
    newLaunch: false,
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A16 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl: "https://m.media-amazon.com/images/I/71VbHaAqbML._SL1500_.jpg",
  },
  {
    _id: uuid(),
    name: "iPad Pro",
    price: 120999,
    salePrice: "",
    memory: 128,
    currency: "INR",
    category: "iPad",
    newLaunch: false,
    details: `
        128 GB ROM
        11.94 cm (4.7 inch) Retina HD Display
        12MP Rear Camera | 7MP Front Camera
        A16 Bionic Chip with 3rd Gen Neural Engine Processor
        Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
        Fast Charge Capable
        Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
    imgUrl: "https://m.media-amazon.com/images/I/81gC7frRJyL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    name: "MoonDrop Blessings 3",
    price: 29990,
    salePrice: "",
    memory: null,
    currency: "INR",
    category: "IEMs",
    newLaunch: false,
    details: `Moondrop has reinvented the classic Blessing series with the introduction of Blessing 3. It features dual 10mm dynamic drivers and four balanced armature driver setups. There are dedicated dual-balanced armature drivers for the mids and dual for the highs making the performance even more refined and lifelike. By utilising cutting-edge 3D printing, The Blessing 3 maintains the physical frequency division architecture of earlier iterations. It incorporates a brand-new Horizontally-Opposed Double-Dynamic bass driver module that offers spectacular dynamic range and less dynamic nonlinear distortion than earlier models. The continuity and smoothness of the mid-highs have been further refined by improved hybrid frequency division implementation, ensuring ultra-high detail. A brand-new bass module delivers a tight and impactful bass response. The Blessing series' traditional hybrid triple-frequency division represents the pinnacle of Moondrop's unmatched acoustic knowledge, supported by several tests in the business' measuring laboratory and ensuring high full-band phase consistency.`,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Moondrop-Blessing-3-01.jpg",
  },
  {
    _id: uuid(),
    name: "Moondrop - Variations",
    price: 49999,
    salePrice: "",
    memory: null,
    currency: "INR",
    category: "IEMs",
    newLaunch: false,
    details: `Utilizing a highly refined 2EST+2BA+1DD Tribrid technology, the Moondrop Variations carries 2 electrostatic drivers, 2 balanced armature drivers and 1 dynamic driver. Also known as an electric electro-acoustic transducer, the dynamic driver fitted in the Variations can generate displacement by energizing the conductor in a constant magnetic field. The balanced armature drivers on the other hand are placed using vibrating ferromagnetism and coil parts that are installed in the magnetic circuit. Therefore when alternating current runs within the coil, it leads to the creation of an alternating magnetic field. The electrostatic drivers, which are also known as capacitive electroacoustic transducers, use the repulsive force of the electrostatic field to produce sound.`,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Moondrop-Variations-1160-1160-1.jpg",
  },
  {
    _id: uuid(),
    name: "KZ - PR1 Pro",
    price: 8499,
    salePrice: "",
    memory: null,
    currency: "INR",
    category: "IEMs",
    newLaunch: false,
    details: `KZ Acoustics had taken a giant step forward by introducing the KZ PR1 planar in-ear monitor in response to the development of planar technology in IEMs. A team of engineers at KZ wanted to improve the performance of the PR1 even further. This philosophy leads to the birth of the PR1 Pro. The senior tuner team has fine-tuned the three-frequency connection ratio thousands of times, bringing the acoustic crystallisation of the frequency response curve. The KZ PR1 Pro features a high-definition planar driver that captures subtle nuances in your recordings. Even the most discerning audio lovers will be pleased with its mind-blowing sonic performance. The KZ PR1 Pro will leave you dumbfounded with its musical performance and striking appearance right out of the box!.`,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-KZ---PR1-Pro---Gallery-06.jpg",
  },
  {
    _id: uuid(),
    name: "Truthear - HEXA",
    price: 6999,
    salePrice: "",
    memory: null,
    currency: "INR",
    category: "IEMs",
    newLaunch: true,
    details: `Truthear has designed the HEXA with an efficient driver configuration. The Truthear HEXA hosts one dynamic driver + three balanced armature drivers hybrid structure. The original intention of the design is to achieve a reasonable and efficient configuration. The Truthear HEXA strives to bring you a full-range and accurate representation. A 10mm specialised dynamic driver is responsible for bass. The mature internal magnetic circuit has a flexible polyurethane suspension material and an LCP liquid crystal dome diaphragm, which is the same concept as Truthear ZERO. A unique weighted voice coil reduces natural Resonance Frequency and moderately increases the impedance. This design architecture allows the HEXA to reproduce the punchiest bass and meet the needs of accurate distribution. A composite full-frequency balanced armature driver is responsible for the mids, which matches the frequency band of the specialised dynamic driver. The high-frequency band also conforms to the HRTF characteristics closely. A custom-balanced armature driver, similar to the WBFK series, is responsible for the highs, which allows HEXA to reproduce a smooth, clean high-frequency performance through fine processing. Experience the magic of hybrid drivers and immerse yourself in pure sonic bliss!`,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Truthear-HEXA-01.jpg",
  },
  {
    _id: uuid(),
    name: "Focal - Clear MG",
    price: 99990,
    salePrice: "",
    memory: null,
    currency: "INR",
    category: "Headphones",
    newLaunch: true,
    details: `Focal's Clear Mg open-back headphones set the bar high for sound quality and feature-rich, design-driven functionality. These premium headphones feature unique Focal technologies developed through cutting-edge acoustic research and Focal know-how. Clear Mg is a prime example of design finesse and emanates exuberance in all respects. The Clear Mg hosts a 40mm dynamic driver unit. Magnesium, a material that enables sharp, precise, impactful playback and produces stunningly realistic sound, makes up the speaker drivers. The sound is incredibly pure and natural, unleashing emotions for better listening enjoyment. `,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Clear-MG-01.jpg",
  },
  {
    _id: uuid(),
    name: "Audeze - LCD-X",
    price: 109990,
    salePrice: "",
    memory: null,
    currency: "INR",
    category: "Headphones",
    newLaunch: true,
    details: `Audeze began in a garage in Orange County, Ca, like many other high-tech companies. Audeze is the brainchild of Sankar Thiagasamudram & Alexander Rosson and was founded in 2008. It did not take long for the founders to recognise that they had the potential to be one of the most influential companies in the headphone market. Audeze was born as a result of this. Audeze is known for making some of the best planar magnetic headphones. The latest and greatest LCD-X is an add-on to the most revered line-up of planar magnetic headphones from Audeze. The Audeze LCD-X is the gold standard in the professional audio world. It has low distortion, lightning-fast transient response, and accurate frequency response. The advancements in technology you will find in LCD-X make them truly special, and audiophiles and professionals have loved and adopted them. Audeze’s planar magnetic drivers do not suffer from variation in impedance. Because the voice coil is printed directly on the diaphragm, they produce a flat impedance curve. This design ensures no change in resistance regardless of the frequency, offering a boost in control and resolution.`,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Audeze-LCD-X-New.jpg?v=1590835301&width=600",
  },
  {
    _id: uuid(),
    name: "RAAL - SR1a",
    price: 349999,
    salePrice: "",
    memory: null,
    currency: "INR",
    category: "Headphones",
    newLaunch: false,
    details: `The RAAL-requisite SR1a headphones are embedded with the latest and cutting edge technology in the audio field. This innovative approach is reflected in the driver configuration and the type of driver selected for the headphones. The SR1a is the world’s first True-Ribbon™ headphones and have been equipped with highly specialised ribbon drivers that reproduce 30Hz to 30kHz bandwidth to eliminate the need for sealed chambered bass and allow for open-air baffles (both front and back) for a full-frequency sound field.`,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-RAAL-requisite-SR1a-Earfield-Monitors-1160-1160-01_037f56a5-5214-4377-85c8-50aa73b9d714.jpg?v=1637062767&width=600",
  },
  {
    _id: uuid(),
    name: "HiFiMAN - HE400se",
    price: 10499,
    salePrice: "",
    memory: null,
    currency: "INR",
    category: "Headphones",
    newLaunch: true,
    details: `HiFiMAN is a market leader in premium headphones and takes great pleasure in continuously enhancing sound quality. HiFiMAN, founded by owner Dr Fang in New York, is one of the leading personal audio brands. It is renowned for its critically-acclaimed Planar-Magnetic headphones that feature state-of-the-art driver technology. HiFiMAN is known to bring revolutionary technologies like the Stealth Magnet that have garnered success. The audio industry's favourite HE400 series has a new addition - the HiFiMAN HE400se. The HE400 series has been winning the hearts of critics and music lovers across the globe. With the HE400se, HiFiMAN gives one more reason for you to fall in love with the HE400 series. The brand-new HE400se is a Planar Magnetic headphone with an advanced conductive layer that covers the diaphragm reducing distortion to low levels.`,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-HE400se-1160-1160-7.jpg?v=1614245064&width=600",
  },
];
