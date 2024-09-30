import { RiTShirt2Fill } from "react-icons/ri";
import { FaEllipsisH } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "News",
    hash: "/news",
  },
  {
    name: "Product",
    hash: "/product",
  },
  {
    name: "About Us",
    hash: "/aboutus",
  },
] as const;

export const partnership = [
  {
    url: "https://www.oap.go.th/wp-content/uploads/2024/01/Artwork_Logo_MHESI_final_27_04_2564_-01.png",
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
    categoryName: "Products",
    icon: RiTShirt2Fill,
  },
  {
    categoryName: "News",
    icon: LuNewspaper,
  },
  {
    categoryName: "Other Stuff",
    icon: FaEllipsisH,
  },
] as const;

export const news = [
  {
    id: 1,
    image: "",
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
