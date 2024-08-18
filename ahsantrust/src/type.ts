export interface Store {
  id: string;
  images_url: string;
  name: string;
  details: string;
  location: string;
  categories: string;
  phone: string;
  time: string;
  values: string[];
  qualities: string[];
  ethics: string[];
  benefits: string[];
  facebook: string;
  instagram: string;
  logo: string;
  ActiveDate: string;
}

export interface News {
  id: string;
  image: string;
  name: string;
  details: string;
  Date: string;
}
