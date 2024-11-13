import NavbarImg from "components/common/Navbar-wo";
import fabricAhsan from "@assets/fabric-ahsan.png";
import { useEffect, useState } from "react";
import type { Product, Store } from "type";
import { getStoreById } from "services/AxiosClient";
import { useParams } from "react-router-dom";
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
    const categories = products.map((product) => product.categories);
    return Array.from(new Set(categories));
  };

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredProducts(products);
    } else {
      setSelectedCategory(category);
      const filtered = products.filter(
        (product) => product.categories === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="">
      <NavbarImg />
      <div className="mt-0">
        <div className="header mt-5">
          <div className="relative px-10">
            <img
              src={fabricAhsan}
              alt=""
              className="w-full object-cover h-60"
            />

            {/* Overlay with logo and information side by side on lg screens */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-row items-center lg:items-center justify-center gap-6 p-4">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <img
                  src={store?.logo}
                  alt={store?.name}
                  className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover"
                />
              </div>

              {/* Store Information Section */}
              <div className="text-white text-center lg:text-left mt-4 lg:mt-0">
                <p className="font-semibold text-2xl py-2">{store?.name}</p>

                <div className="address grid grid-cols-2 gap-3 py-1">
                  <p>ที่อยู่ของร้าน</p>
                  <a href={store?.location} className="text-blue-100 underline">
                    {store?.name}
                  </a>
                </div>

                <div className="grid grid-cols-2  gap-3 py-1">
                  <p>Facebook</p>
                  <a href={store?.facebook} className="text-blue-100 underline">
                    {store?.name}
                  </a>
                </div>

                <div className="grid grid-cols-2  gap-3 py-1">
                  <p>Instagram</p>
                  <a
                    href={store?.instagram}
                    className="text-blue-100 underline"
                  >
                    {store?.name}
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 py-1">
                  <p>ติดต่อ</p>
                  <p className="text-blue-100">{store?.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categories-container mt-8 flex justify-center">
          <div className="flex gap-4 mb-6">
            {getUniqueCategories().map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 flex items-center rounded-full ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {selectedCategory === category && <FaXmark className="mr-2" />}
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="products-container grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 mt-3 px-5 gap-3">
          {selectedCategory && filteredProducts.length === 0 ? (
            <p>No products found in this category</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card border p-4 rounded-lg shadow"
              >
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
