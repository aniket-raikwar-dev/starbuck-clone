import { importImage } from "../utils/importImage";

export const bigCarouselData = [
  {
    id: 1,
    src: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/banner_icon_1_2_d97e1578ee.png",
    topSmallHeading: "Trending Now",
    topBigHeading: "Classic Essential",
    para: " Your Starbucks experience just got an upgrade with our newly designed merchandise.",
    price: "900.00",
    backgroundColor: "#02B387",
  },
  {
    id: 2,
    src: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Frapp_Mocha_Banner_2_611041dedb.png",
    topSmallHeading: "Delicious with Rewards Experience",
    topBigHeading: "Starbucks Rewards Day",
    para: "Save the date: Sun, 27th Aug ‘23, Get a Free* Ltd. Edition Reusable Cup. *First come first serve.",
    price: "650.00",
    backgroundColor: "#274c77",
  },
  {
    id: 3,
    src: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Banner_Strawberry_3_3c6d02bcd2.png",
    topSmallHeading: "A Berry-licious Delight!",
    topBigHeading: "Strawberry Acai",
    para: "Experience the harmonious blend of sweet strawberry accented with notes of acai, chilled with ice and real fruit. ",
    price: "346.00",
    backgroundColor: "#FF3474",
  },
  {
    id: 4,
    src: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/3_3_84a1eee739.png",
    topSmallHeading: "Can't Miss This Bean",
    topBigHeading: "East Timor Blend",
    para: "Medium roast blend featuring  sweet, smooth and spiced harmony of flavours - crafted perfectly for you. ",
    price: "1400.00",
    backgroundColor: "#FC784D",
  },
];

export const boxCardData = [
  {
    id: 1,
    img: importImage("offerings/belgium.webp"),
    head1: "Belgium Chocolate Frappuccino",
    head2: "SHORT(Short Mocha Cookie Crumble) ",
    head3:
      "Our Mocha Cookie crumble Latte is a deliciously flavoured mocha indulgence - Hot coffee meets chocolate and co...",
    price: "414.75",
  },
  {
    id: 2,
    img: importImage("offerings/mocha.webp"),
    head1: "Mocha Cookie Crumble Frappuccino",
    head2: "TALL(Tall Mocha Cookie Crumble Frappuccino)",
    head3:
      "A perfect blend of coffee, vanilla flavour, milk and cocoa powder. Finished with delicious chocolate whipped c...",
    price: "483.00",
  },
  {
    id: 3,
    img: importImage("offerings/iced.webp"),
    head1: "Iced Mocha Cookie Crumble",
    head2: "TALL(Iced Tall Mocha Cookie Crumble)",
    head3:
      "A mix of cocoa powder, Vanilla flavour and espresso shot served on milk and ice, topped with delicious chocola...",
    price: "446.25",
  },
  {
    id: 4,
    img: importImage("offerings/mango.webp"),
    head1: "Alphonso Mango Java Chip Frappuccino",
    head2: "TALL(Tall Strawberry Acai Lemonade)",
    head3:
      "Sweet strawberry flavours accented by açaí notes, shaken with ice and strawberry pieces — a welcoming sweet sp...",
    price: "346.50",
  },
];

export const baristaItem = [
  {
    id: 1,
    name: "Hazelnut Triangle",
    price: "204.75",
    isVeg: true,
    description: "PER SERVE (50 g)  - 302 Kcal",
    img: importImage("barista/triangle.jpeg"),
  },
  {
    id: 2,
    name: "Bhuna Chicken Puff",
    price: "194.25",
    isVeg: false,
    description: "PER SERVE (85 g)  - 390 Kcal",
    img: importImage("barista/bhuna.jpeg"),
  },
  {
    id: 3,
    name: "Chocolate Brownie Cupcake",
    price: "288.75",
    isVeg: true,
    description: "PER SERVE (80 g) - 416kcal",
    img: importImage("barista/choclate.jpeg"),
  },
  {
    id: 4,
    name: "Three Dip Nachos",
    price: "262.50",
    isVeg: true,
    description: "PER SERVE (180 g)  - 513 Kcal",
    img: importImage("barista/dip.jpeg"),
  },
  {
    id: 5,
    name: "Chilli Paneer In Herbed Bun ",
    price: "283.50",
    isVeg: true,
    description: "PER SERVE (160 g) - 598 kcal",
    img: importImage("barista/chilli.jpeg"),
  },
];
