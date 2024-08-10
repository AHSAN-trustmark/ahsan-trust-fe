import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { categoryFilters } from "../lib/data";
import { getStoreData } from "../services/AxiosClient";
import { Store } from "../type";
import { useNavigate } from "react-router-dom";

const Stores = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/stores/${id}`);
  };

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getStoreData();
        setStores(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, []);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, stores.length - 4) : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= stores.length - 4 ? 0 : prevIndex + 1
    );
  };

  const visibleStores = stores.slice(currentIndex, currentIndex + 4);

  return (
    <section className="mt-44">
      <div className="flex items-end gap-80">
        <div>
          <p className="text-titleBlue font-medium leading-4 text-sm">
            Our Recommendation
          </p>
          <h1 className="text-3xl font-semibold leading-10 text-darkBlue mt-1">
            Stores
          </h1>
        </div>
        <div className="flex gap-6 ">
          {categoryFilters.map((category, index) => (
            <div
              className="flex items-center gap-2 text-lightGrey py-2 px-5 rounded-3xl grey-border"
              key={index}
            >
              <category.icon className="text-lightGrey" />
              <a className="">{category.categoryName}</a>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={slideLeft}
            className="bg-bgGrey py-3 px-5 rounded-3xl	"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={slideRight}
            className="bg-darkBlue py-3 px-5 rounded-3xl text-white	"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="card-container mt-8 flex gap-12">
        {visibleStores.map((store) => (
          <div className="card" key={store.id}>
            <div
              key={store.id}
              className="card cursor-pointer"
              onClick={() => handleCardClick(store.id)}
            >
              <div className="card-img">
                <img src={store.images_url} alt={store.name} />
              </div>
              <div className="card-description mt-5">
                <h3 className="text-normalBlackText cursor-pointer">
                  {store.name}
                </h3>
                <p className="text-normalGreyText">{store.categories}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stores;
