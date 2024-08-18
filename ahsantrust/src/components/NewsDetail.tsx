import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNewsById, getNewsData } from "services/AxiosClient";
import { News } from "type";
import NavbarImg from "./common/Navbar-wo";
import { FaChevronLeft, FaChevronRight, FaClock } from "react-icons/fa";

const NewsDetail = () => {
  const [news, setNews] = useState<News | null>(null);
  const [newsCard, setNewsCard] = useState<News[]>([]);
  const { id } = useParams<{ id: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getNewsById(id!);
        setNews(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, [id]);

  const handleCardClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, newsCard.length - 3) : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= newsCard.length - 3 ? 0 : prevIndex + 1
    );
  };

  const visibleNews = newsCard.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getNewsData();
        setNewsCard(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, []);

  if (!news) return <div>No store found</div>;

  return (
    <div className="bg-gray-50 h-screen w-screen">
      <NavbarImg />
      <div className="bg-blue-100 rounded-2xl relative w-5/6 ml-28 mt-4 bg-opacity-60">
        <div className="flex p-14 gap-12">
          <div className="flex gap-5">
            <img
              src={news.image}
              alt={news.name}
              className="w-1/2 h-96 object-cover rounded-3xl"
            />

            <div className="detail w-2/3">
              <h1 className="text-blue-900 font-bold text-3xl">{news.name}</h1>
              <div className="time flex gap-2 pt-5">
                {" "}
                <FaClock className=" text-2xl text-lightGrey" />
                <span className=" text-sm leading-6 font-normal text-lightGrey">
                  {news.Date}
                </span>
              </div>

              <p className="pt-5 text-md">{news.details}</p>
              <p className="pt-5 text-blue-800">
                #AhsanTrustmark #ahsantrustmark #trustworthyproducts
                #เครื่องหมายรับรองคุณภาพสินค้าท้องถิ่น
                #คุณค่าคุณภาพคุณธรรมคุณประโยชน์ #ExcellenceInEveryProduct
                #rahmatanlilaalameen #บพท #มหาวิทยาลัยฟาฏอนี
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 pt-10 justify-center">
        <button onClick={slideLeft} className="py-3 px-5 rounded-3xl	">
          <FaChevronLeft />
        </button>
        <div className="card-container flex gap-8 ">
          {visibleNews.map((news) => (
            <div className="card" key={news.id}>
              <div
                key={news.id}
                className="card cursor-pointer bg-gray-100 p-3 rounded-md"
                onClick={() => handleCardClick(news.id)}
              >
                <span className="flex gap-5">
                  <img
                    src={news.image}
                    alt={news.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  <div className="mt-5">
                    <h3 className="text-normalBlackText cursor-pointer w-56 hover:text-blue-500">
                      {news.name}
                    </h3>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
        <button onClick={slideRight} className="py-3 px-5 rounded-3xl">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
export default NewsDetail;
