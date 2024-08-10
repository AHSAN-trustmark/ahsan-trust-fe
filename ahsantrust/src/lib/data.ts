import { RiTShirt2Fill } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "News",
    hash: "#",
  },
  {
    name: "Store",
    hash: "#",
  },
  {
    name: "About Us",
    hash: "#",
  },
] as const;

export const partnership = [
  {
    url: "https://pmua.or.th/wp-content/uploads/2023/12/Logo-mhesi.webp",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvEk8tkGvrxSe-s_vNasCNAiFFyow5qOsvkg&s",
  },
  {
    url: "https://research.buu.ac.th/web2019/wp-content/uploads/2023/03/22223-8.png",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/th/9/95/Ftu_logo.png",
  },
];

export const categoryFilters = [
  {
    categoryName: "Clothes",
    icon: RiTShirt2Fill,
  },
  {
    categoryName: "Food",
    icon: MdFastfood,
  },
  {
    categoryName: "Other Stuff",
    icon: FaEllipsisH,
  },
] as const;

export const data = [
  {
    title: "Value",
    items: [
      "Local Wisdom Value",
      "Local Lifestyle Value",
      "Community Support Value",
    ],
  },
  {
    title: "Quality",
    items: [
      "International Production Standards",
      "Quality of Raw Materials",
      "Product Safety Quality",
    ],
  },
  {
    title: "Ethics",
    items: [
      "Fairness Ethics",
      "Islamic Compliance Ethics",
      "Environmental Ethics",
      "Local Labor Support Ethics",
    ],
  },
  {
    title: "Benefit",
    items: ["Health Benefits", "Social Benefits"],
  },
];

export const news = [
  {
    id: 1,
    image: "/assets/Image1.png",
    title: "The things we need to check when we want to buy a house",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur",
    date: "4 min read | 25 Apr 2021",
  },
  {
    id: 2,
    image: "/assets/Image1.png",
    title: "The things we need to check when we want to buy a house",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur",
    date: "4 min read | 25 Apr 2021",
  },
  {
    id: 3,
    image: "/assets/Image1.png",
    title: "The things we need to check when we want to buy a house",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur",
    date: "4 min read | 25 Apr 2021",
  },
];
