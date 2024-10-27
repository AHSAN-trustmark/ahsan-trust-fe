import "AllProducts.css";
import NavbarImg from "components/common/Navbar-wo";
import { useState, useEffect } from "react";
import { getProduct } from "services/AxiosClient";
import { Product } from "type";
import Heading from "@assets/fabric-ahsan.png";
import Footer from "components/common/Footer";

export function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProduct();
        setProducts(product);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <NavbarImg />
      <div className="relative px-10">
        <img src={Heading} alt="" className="w-full object-cover h-60" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-2xl font-semibold">
            AHSAN TRUSTMARK
          </p>
        </div>
      </div>

      <section className="bg-white py-8">
      <h1 className="px-5 font-semibold text-3xl">Certified Product</h1>
        <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 pt-4 pb-12">
          {products.map((product) => (
            <div key={product.id} className="p-6 flex flex-col items-center">
              <img
                className="w-full h-60 object-cover hover:grow hover:shadow-lg" // Fixed width and height with object-cover
                src={product.images[0].image_url}
                alt={product.name || "Product Name"}
              />
              <div className="pt-3 flex items-center justify-between w-full">
                <p>{product.name || "Product Name"}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-shop hover:text-blue-700 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
