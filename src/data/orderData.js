import { importImage } from "../utils/importImage";

export const orderSlug = [
  {
    id: 1,
    title: "Bestseller",
    description:
      "Everyone's favorite Starbucks put together in a specially curated collection.",
    is_selected: true,
    slug: "Bestseller",
  },
  {
    id: 2,
    title: "Drinks Espresso",
    description:
      "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
    is_selected: false,
    slug: "Drinks",
  },
  {
    id: 3,
    title: "Merchandise Mugs",
    description: "Artistic collection of ceramic mugs with acacia wood lids.",
    is_selected: false,
    slug: "Merchandise",
  },
  {
    id: 4,
    title: "Ready to Eat",
    description: "Starbucks snacks available on the go.",
    is_selected: false,
    slug: "Ready to Eat",
  },
];

export const merchandiseItems = [
  {
    id: 1,
    title: "Snowflake Mug - 414ml",
    tagline: "PER SERVE (50 g) - 630.2 kCal",
    description: "Gray green snowflake double walled mug for cold beverages on",
    price: "1500.00",
    img: importImage("order/merchandise/snowflake.jpeg"),
  },
  {
    id: 2,
    title: "India Been Ceramic Cup (414 Ml)",
    tagline: "PER SERVE (50 g) - 606.2 kCal",
    description:
      "A desktop mug featuring a painting of artistic leaves. A pre.",
    price: "650.00",
    img: importImage("order/merchandise/india.jpeg"),
  },
  {
    id: 3,
    title: "Rabbits Mug - 355ml",
    tagline: "PER SERVE (50 g) - 630.2 kCal",
    description:
      "Experience the iridescent look of the siren on coral reef an...",
    price: "1100.00",
    img: importImage("order/merchandise/rabbit.jpeg"),
  },
  {
    id: 4,
    title: "Drip Heart Mug - 355 ml",
    tagline: "PER SERVE (50 g) - 606.2 kCal",
    description:
      "Mug with all over glossy finish and giraffe head ornament o...",
    price: "750.00",
    img: importImage("order/merchandise/drip.jpeg"),
  },
];

export const bestSellerItems = [
  {
    id: 1,
    title: "Java Chip Frappuccino",
    tagline: "TALL(354 ML) .392 kcal",
    description:
      "We blend mocha sauce and Frappuccino® chips with Frappuccino...",
    price: "367.50",
    img: importImage("order/bestseller/java.jpeg"),
  },
  {
    id: 2,
    title: "Caffe Americano",
    tagline: "SHORT(237 Ml) .0 kcal",
    description:
      "Rich in flavour, full-bodied espresso with hot water in true...",
    price: "262.50",
    img: importImage("order/bestseller/caffe.jpeg"),
  },
  {
    id: 3,
    title: "Cappuccino",
    tagline: "SHORT(237 ML) .104 Kcal",
    description:
      "Dark, Rich in flavour espresso lies in wait under a smoothed...",
    price: "283.50",
    img: importImage("order/bestseller/cappucino.jpeg"),
  },
  {
    id: 4,
    title: "Double Chocolate Chip",
    tagline: "TALL(354 ML) .392 kcal",
    description:
      "Rich mocha-flavored sauce meets up with chocolaty chips, mil...",
    price: "367.50",
    img: importImage("order/bestseller/double.jpeg"),
  },
  {
    id: 5,
    title: "Blueberry Muffin",
    tagline: "PER SERVE (120 g) - 375.5 Kcal",
    description:
      "Buttery vanilla cake with berries dusted with granulated sug...",
    price: "320.25",
    img: importImage("order/placeholder.svg"),
  },
  {
    id: 6,
    title: "Double Chocolate Chip Cookie",
    tagline: "PER SERVE (80 g) - 385.3 Kcal",
    description:
      "A soft & chewy chocolate cookie topped with chocolate chips ...",
    price: "294.25",
    img: importImage("order/bestseller/chip.jpeg"),
  },
];

export const drinksItems = [
  {
    id: 1,
    title: "Iced Caffe Mocha",
    tagline: "SHORT(237 ML) .216 kcal",
    description: "Our signature espresso and steamed milk with the celebrated ",
    price: "414.75",
    img: importImage("order/drinks/iced.jpeg"),
  },
  {
    id: 2,
    title: "Iced Caffe Slice Latte",
    tagline: "TALL(Iced Tall Pumpkin Spice Latte) .296 kcal",
    description: "Our signature espresso and milk with the celebrated flavor c",
    price: "456.75",
    img: importImage("order/drinks/mocha.jpeg"),
  },
  {
    id: 3,
    title: "Mocha Cookie Crumble Latte",
    tagline: "SHORT(Short Mocha Cookie Crumble) .",
    description:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mo..",
    price: "414.75",
    img: importImage("order/drinks/vanilla.jpeg"),
  },
];

export const readyToEatItems = [
  {
    id: 1,
    title: "Roasted & Salted Almonds",
    tagline: "PER SERVE (50 g) - 630.2 kCal",
    description: "Roasted and Salted Almonds",
    price: "180.00",
    img: importImage("order/eat/roasted.jpeg"),
  },
  {
    id: 2,
    title: "Cranberry Coated Nuts",
    tagline: "Energy per serving size- 500.6kCal/100g.",
    description: "Chocolate coated cranberry bites. Product size- 50g.",
    price: "185.00",
    img: importImage("order/eat/coasted.jpeg"),
  },
  {
    id: 3,
    title: "Almond Biscotti",
    tagline: "PER SERVE (50 g) - 409 kCal",
    description:
      "Delicious on its own or a perfect pairing with your favorite.",
    price: "160.00",
    img: importImage("order/eat/almond.jpeg"),
  },
];
