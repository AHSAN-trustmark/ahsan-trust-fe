import { useState, useEffect } from "react";
import { getNewsData } from "services/AxiosClient";
import { News } from "type";
import { FaClock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AhsanTrustNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getNewsData();
        setNews(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, []);
  return (
    <section className="mt-36">
      <div className="text-center">
        <p className="text-titleBlue font-medium leading-4 text-sm">
          AHSAN Trustmark News & Events
        </p>
        <h1 className="text-3xl font-semibold leading-10 text-darkBlue mt-1">
          Find out more about <br /> our activity and events
        </h1>
      </div>

      <div className="flex gap-14 mt-10 ml-24">
        <div className="flex flex-col gap-10">
          {news.slice(0, 3).map((news, index) => (
            <div
              className="flex items-center gap-5 news-child-block"
              key={index}
            >
              <div className="news-image-block">
                <img
                  src={news.image}
                  alt="image"
                  onClick={() => handleCardClick(news.id)}
                  className="cursor-pointer"
                />
              </div>
              <div className="news-info-block flex flex-col items-start">
                <h3
                  className=" font-medium text-lg leading-8 text-darkBlue hover:text-blue-600 hover:cursor-pointer"
                  onClick={() => handleCardClick(news.id)}
                >
                  {news.name}
                </h3>

                <div className="flex items-center gap-3 mt-1">
                  <FaClock className=" text-2xl text-lightGrey" />
                  <span className=" text-sm leading-6 font-normal text-lightGrey">
                    {news.Date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {news.length > 0 && (
          <div className="rightNews-block">
            <div className="rightNews-block-image-container">
              <img
                src={news[0].image}
                alt="news"
                onClick={() => handleCardClick(news[0].id)}
                className="cursor-pointer"
              />
            </div>
            <div className="rightNews-block-body">
              <h1
                className="font font-medium text-2xl text-darkBlue hover:text-blue-600 hover:cursor-pointer"
                onClick={() => handleCardClick(news[0].id)}
              >
                {news[0].name}
              </h1>
              <p className=" text-sm font-normal leading-6 text-darkGrey">
                {news[0].details}
              </p>
              <div className="flex items-center gap-3">
                <FaClock className="text-2xl text-lightGrey" />
                <span className="text-sm leading-6 font-normal text-lightGrey">
                  {news[0].Date}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AhsanTrustNews;
