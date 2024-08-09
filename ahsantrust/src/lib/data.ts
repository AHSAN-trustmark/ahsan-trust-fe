import { RiTShirt2Fill } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";

export const links = [
  {
    name: "Stores",
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

export const users = [
  {
    id: "1",
    Image: "/assets/owner.jpg",
    Name: "Lobby Cafe",
    Occupation: "Youtuber, Programmer",

    storesInfo: {
      store: {
        id: "1",
        storeImage: "/assets/LobbyCafe.jpeg",
        description: "",
        status: "Popular",
        storeName: "Lobby Cafe",
        location: "Yala",
        category: "Cafe",
      },
    },
  },
  {
    id: "2",
    Image: "/assets/owner.jpg",
    Name: "Make Cafe",
    Occupation: "Youtuber, Programmer",

    storesInfo: {
      store: {
        id: "2",
        storeImage: "/assets/makecafe.jpeg",
        status: "Popular",
        storeName: "Make Cafe Yala",
        location: "Yala",
        category: "Cafe",
      },
    },
  },
  {
    id: "3",
    Image: "/assets/owner.jpg",
    Name: "ขนมหวานน้ำตาลไหม้",
    Occupation: "Youtuber, Programmer",
    PhoneNumber: "0774501852",
    storesInfo: {
      store: {
        id: "3",
        storeImage: "/assets/ขนมหวาน.jpeg",
        status: "Popular",
        storeName: "ขนมหวานน้ำตาลไหม้",
        location: "Yala",
        category: "Cafe",
      },
    },
  },
  {
    id: "4",
    Image: "/assets/owner.jpg",
    Name: "Salam",
    Occupation: "Youtuber, Programmer",

    storesInfo: {
      store: {
        id: "4",
        storeImage: "/assets/StoreImage.webp",
        status: "Popular",
        storeName: "Hijabi Al Halumi",
        location: "Yala",
        category: "Clothes",
      },
    },
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
