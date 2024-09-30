import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getStoreById } from "services/AxiosClient";
import { Product, Store } from "type";
import NavbarImg from "./common/Navbar-wo";
import { HiMiniHome } from "react-icons/hi2";
import { FaPhone, FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import AhsanLogo from "@assets/AhsanTrustLogo.png";
import { StoreFooter } from "./common/ProductFooter";
import SectionDisplay from "./shared/SectionDisplay";

const StoresCard = () => {
  const [store, setStore] = useState<Store | null>(null); // Single store
  const [product, setProduct] = useState<Product | null>(null); // Single product
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProductAndStore = async () => {
      try {
        // First, fetch the product by its ID
        const productData = await getProductById(id!);
        setProduct(productData); // Set product data
        console.log("Product Data:", productData);

        // After fetching the product, extract the store ID
        const storeID = productData.store;

        // Use the store ID to fetch the corresponding store details
        const storeData = await getStoreById(storeID);
        setStore(storeData); // Set store data
        console.log("Store Data:", storeData);
      } catch (error) {
        console.error("Error fetching product or store:", error);
      }
    };

    fetchProductAndStore();
  }, [id]);

  // Handle the case when product or store is not found
  if (!product) return <div>No product found</div>;
  if (!store) return <div>No store found</div>;

  // Define the sections of the product (values, qualities, etc.)
  const sections = [
    { title: "Values", items: product.values },
    { title: "Qualities", items: product.qualities },
    { title: "Ethics", items: product.ethics },
    { title: "Benefits", items: product.benefits },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <NavbarImg />
      <div className="store-card flex gap-3 p-12 bg-gray-50 m-1 rounded-3xl shadow-lg">
        <div className="product-img flex justify-center items-center">
          <img
            src={product.images[0].image_url}
            alt={product.name}
            className="w-300 h-96 object-cover rounded-3xl"
          />
        </div>

        <div className="product-detail">
          <div className="store-detail flex flex-col justify-center gap-2">
            <p className="text-2xl">{product.name}</p>
            <p className="text-gray-500 text-xs">
              {product.details}
            </p>

            <div className="contact grid grid-cols-2 gap-3 mt-5">
              <div className="address flex gap-1 items-center border justify-center rounded-full py-1">
                <HiMiniHome className="text-xl" />
                {store && (
                 <a
                 href={store.location}
                 className="text-xs text-blue-500"
               >
                 {store.name}
               </a>
                )}
              </div>
              <div className="address flex gap-2 items-center border justify-center rounded-full py-1">
                <FaPhone className="text-md" />
                {store && (
                  <p className="text-xs">{store.phone}</p> 
                )}
              </div>
              <div className="address flex gap-1 items-center border justify-center rounded-full py-1">
                <FaSquareFacebook className="text-xl text-blue-800" />
                {store && (
                  <a
                    href={store.facebook}
                    className="text-xs text-blue-500"
                  >
                    {store.name}
                  </a>
                )}
              </div>
              {store && store.instagram && (
                <div className="address flex gap-1 items-center border justify-center rounded-full py-1">
                  <GrInstagram className="text-xl text-pink-700" />
                  <a
                    href={store.instagram}
                    className="text-xs text-blue-500"
                  >
                    {store.name}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="py-5">
            <SectionDisplay sections={sections}/>
          </div>
        </div>
      </div>

      
      <StoreFooter />
    </div>
  );
};

export default StoresCard;
