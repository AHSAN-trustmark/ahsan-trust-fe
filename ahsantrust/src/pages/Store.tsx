import NavbarImg from "components/common/Navbar-wo";
import fabricAhsan from "@assets/fabric-ahsan.png";
import { useEffect, useState } from "react";
import type { Product, Store } from "type";
import { getStoreById } from "services/AxiosClient";
import { useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

export function Store() {
  const [store, setStore] = useState<Store | null>(null);
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const store = await getStoreById(id!);
        setStore(store);
        setProducts(store.products);
        setFilteredProducts(store.products);
      } catch (error) {
        console.error("Error fetching store", error);
      }
    };

    fetchProduct();
  }, []);

  const getUniqueCategories = () => {
    const categories = products.map(product => product.categories);
    return Array.from(new Set(categories)); 
  };

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredProducts(products); 
    } else {
      setSelectedCategory(category);
      const filtered = products.filter((product) => product.categories === category);
      setFilteredProducts(filtered);
    }
  };

  

  return (
    <div className="h-screen w-screen">
      <NavbarImg />
      <div className="header m-0 relative">
        <img
          src={fabricAhsan}
          alt="ahsan fabric"
          className="w-screen h-72 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-72 bg-gray-700 bg-opacity-60"></div>

        <div className="search absolute top-10 w-full flex  gap-2 justify-end px-14">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="ค้นหาสินค้าในร้านค้า"
              className="border-2 border-white bg-transparent rounded-full w-full py-1.5 pl-10 pr-4 text-white placeholder-gray-300"
            />
            <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-2xl" />
          </div>
          <button className="bg-blue-800 bg-opacity-80 p-2 rounded-full text-white w-24">
            search
          </button>
        </div>

        <div className="content-header absolute top-7 left-10 flex gap-12 text-white">
          <img
            src={store?.logo}
            alt={store?.name}
            className="w-56 rounded-full"
          />

          <div className="information">
            <p className="font-semibold pt-5 text-2xl py-2">{store?.name}</p>
            <div className="address grid grid-cols-2 gap-3 py-1">
              <p className="">ที่อยู่ของร้าน</p>
              <a href={store?.location} className="text-blue-100 underline">
                {store?.name}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 py-1">
              <p className="">Facebook</p>
              <a href={store?.facebook} className="text-blue-100 underline">
                {store?.name}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 py-1">
              <p className="">Instagram</p>
              <a href={store?.instagram} className="text-blue-100 underline">
                {store?.name}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 py-1">
              <p className="">ติดต่อ</p>
              <p className="text-blue-100">{store?.phone}</p>
            </div>
          </div>
        </div>
        <div className="categories-container mt-8 flex justify-center">
          <div className="flex gap-4 mb-6">
          {getUniqueCategories().map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 flex items-center rounded-full ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {selectedCategory === category && (
                  <FaXmark className="mr-2" /> 
                )}
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="products-container grid grid-cols-6 mt-3 px-5 gap-3">
        {selectedCategory && filteredProducts.length === 0 ? (
            <p>No products found in this category</p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card border p-4 rounded-lg shadow">
                <div className="product-images">
                <img
                  src={product.images[0].image_url}
                  alt={product.name}
                  className="h-48 w-full object-cover mb-2"
                />
                </div>
                <h2 className="font-semibold text-center">{product.name}</h2>
              </div>
            ))
          )}
          
        </div>
      </div>
    </div>
  );
}
