import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, getProductById} from "services/AxiosClient";
import { Product } from "type";

export function ProductFooter() {
  const [products, setProduct] = useState<Product | null>(null);
  const [productCard, setProductCard] = useState<Product[]>([]);
  const { id } = useParams<{ id: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getProductById(id!);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchStores();
  }, [id]);

  const handleCardClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, productCard.length - 6) : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= productCard.length - 6 ? 0 : prevIndex + 1
    );
  };

  const visibleStores = productCard.slice(currentIndex, currentIndex + 6);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getProduct();
        setProductCard(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, []);

  return (
    <div className="flex gap-3 justify-center">
      <button onClick={slideLeft} className="py-3 px-5 rounded-3xl	">
        <FaChevronLeft />
      </button>
      <div className="card-container flex gap-2 ">
        {products&& <p></p>}
        {visibleStores.map((products) => (
          <div className="card" key={products.id}>
            <div
              key={products.id}
              className="card cursor-pointer bg-blue-50 p-2 rounded-md"
              onClick={() => handleCardClick(products.id)}
            >
              <span className="flex gap-5">
                <img
                  src={products.images[0].image_url}
                  alt={products.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </span>
              <p className="text-xs text-center p-2">{products.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={slideRight} className="py-3 px-5 rounded-3xl">
        <FaChevronRight />
      </button>
    </div>
  );
}
