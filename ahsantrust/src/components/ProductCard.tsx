import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getStoreById } from "services/AxiosClient";
import { Product, Store } from "type";
import NavbarImg from "./common/Navbar-wo";
import { HiMiniHome } from "react-icons/hi2";
import { FaPhone, FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ProductFooter } from "./common/ProductFooter";
import SectionDisplay from "./shared/SectionDisplay";
import ProductGallery from "./shared/ProductGallery";
import { BENEFITS_CHOICES, ETHICS_CHOICES, QUALITIES_CHOICES, VALUES_CHOICES } from "./shared/ProductValues";

const StoresCard = () => {
  const [store, setStore] = useState<Store | null>(null); 
  const [product, setProduct] = useState<Product | null>(null); 
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

  if (!product) return <div>No product found</div>;
  if (!store) return <div>No store found</div>;

  const sections = [
    { title: "Values", items: VALUES_CHOICES.map(choice => product.values?.includes(choice) ? choice : `${choice} (In progress)`) },
    { title: "Qualities", items: QUALITIES_CHOICES.map(choice => product.qualities?.includes(choice) ? choice : `${choice} (In progress)`) },
    { title: "Ethics", items: ETHICS_CHOICES.map(choice => product.ethics?.includes(choice) ? choice : `${choice} (In progress)`) },
    { title: "Benefits", items: BENEFITS_CHOICES.map(choice => product.benefits?.includes(choice) ? choice : `${choice} (In progress)`) },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <NavbarImg />
      <div className="store-card flex gap-3 p-12 bg-gray-50 my-5 rounded-3xl shadow-lg h-130">
      <div className="product-img justify-center items-center h-[24rem]">
          <ProductGallery images={product.images.map((img) => img.image_url)}/>
      </div>


        <div className="product-detail w-128 h-[26rem]">
          <div className="store-detail flex flex-col justify-center gap-2">
            <p className="text-2xl">{product.name}</p>
            <p className="text-gray-500 text-xs">
              {product.details}
            </p>
          <a href="" className="flex items-center gap-2">
            <img src={store.logo} alt={store.name} className="w-8 rounded-full"/>
            <p className="text-xs">{store.name}</p>
          </a>
            <div className="contact grid grid-cols-2 gap-2 py-1">
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
          <div className="py-2">
           
            <SectionDisplay sections={sections}/>
          </div>
        </div>
      </div>

      
      <ProductFooter />
    </div>
  );
};

export default StoresCard;
