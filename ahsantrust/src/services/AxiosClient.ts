import axios from "axios";
import { News, Product, Store } from "../type";

const API_URL = import.meta.env.VITE_API_URL || "";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getStoreData = async () => {
  try {
    const response = await api.get("/stores");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching store data:", error);
    throw error;
  }
};

export const getProduct = async () => {
  try {
    const response = await api.get("/products/products/");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await api.get(`/products/products/${id}`);
    const productData = response.data;
    return productData;
  } catch (error) {
    console.error("Error fetching store data:", error);
    throw error;
  }
};

export const getStoreById = async (id: string): Promise<Store> => {
  try {
    const response = await api.get(`stores/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching store data:", error);
    throw error;
  }
};

export const getNewsData = async () => {
  try {
    const response = await api.get("news/");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw error;
  }
};

export const getNewsById = async (id: string): Promise<News> => {
  try {
    const response = await api.get(`news/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw error;
  }
};
