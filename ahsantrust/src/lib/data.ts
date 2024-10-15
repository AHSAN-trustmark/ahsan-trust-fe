import { RiTShirt2Fill } from "react-icons/ri";
import { FaEllipsisH } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Register",
    hash: "/register",
  },
  // {
  //   name: "Store",
  //   hash: "/store",
  // },
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


export const ahsan = [
  {
    letter: 'A',
    title: 'Authenticity',
    description: 'The products have a clear origin, are produced in accordance with Islamic principles, and are environmentally responsible.'
  },
  {
    letter: 'H',
    title: 'Humanity',
    description: 'The products are made without the use of unfair labor practices, ensuring the rights and welfare of the producers are protected and respecting the consumers.'
  },
  {
    letter: 'S',
    title: 'Standard',
    description: 'The products have passed quality tests, ensuring safety and effectiveness.'
  },
  {
    letter: 'A',
    title: 'Accredited',
    description: 'The products have been inspected and certified by the AHSAN Trustmark Quality Assurance Committee.'
  },
  {
    letter: 'N',
    title: 'Network',
    description: 'The products are part of a business network that supports sustainable trade and fair pricing.'
  }
];


