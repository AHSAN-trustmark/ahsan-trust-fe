import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStoreById } from "services/AxiosClient";
import { Store } from "type";
import NavbarImg from "./common/Navbar-wo";
import { HiMiniHome } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import AhsanLogo from "@assets/AhsanTrustLogo.png";
import { StoreFooter } from "./common/storeFooter";

const StoresCard = () => {
  const [store, setStore] = useState<Store | null>(null);
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getStoreById(id!);
        setStore(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, [id]);

  if (!store) return <div>No store found</div>;

  const sections = [
    { title: "Values", items: store.values },
    { title: "Qualities", items: store.qualities },
    { title: "Ethics", items: store.ethics },
    { title: "Benefits", items: store.benefits },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <NavbarImg />
      <div className="store-card flex gap-3 p-12 bg-gray-50 m-5 rounded-3xl shadow-lg">
        <div className="product-img flex justify-center items-center">
          <img
            src={store.images_url}
            alt={store.name}
            className="w-400 h-96  object-cover rounded-3xl"
          />
        </div>

        <div className="product-detail">
          <div className="store-detail flex flex-col justify-center gap-2">
            <span className="flex items-center text-center">
              <img
                src={store.logo}
                alt={store.name}
                className="w-1/5 rounded-3xl"
              />
              <h1 className="text-7xl">{store.name}</h1>
            </span>

            <p className="text-gray-500 py-3 text-xs w-11/12">
              {store.details}
            </p>
            <div className="contact flex gap-3">
              <div className="adress flex gap-1 border rounded-3xl w-fit p-3">
                <HiMiniHome className="text-2xl" />
                <p className="text-sm pt-1"> {store.location}</p>
              </div>
              <div className="adress flex gap-1 border rounded-3xl w-fit p-3">
                <FaPhoneAlt className="text-xl" />
                <p className="text-sm pt-1"> {store.phone}</p>
              </div>
              <div className="adress flex gap-1 border rounded-3xl w-fit p-3">
                <FaSquareFacebook className="text-2xl text-blue-800" />
                <a href={store.facebook} className="text-sm py-1 text-blue-500">
                  {store.name}
                </a>
              </div>
              {store.instagram && (
                <div className="adress flex gap-1 border rounded-3xl w-fit p-3">
                  <GrInstagram className="text-2xl text-pink-700" />
                  <a
                    href={store.facebook}
                    className="text-sm py-1 text-blue-500"
                  >
                    {" "}
                    {store.instagram}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="footer flex gap-2  my-12 items-center">
            <h1 className="border bg-blue-800 bg-opacity-90 flex items-center gap-2 p-6 hadow-md text-white text-sm rounded-3xl">
              หากสนใจสามารถสนับสนุนได้ทางเพจ
              <a
                href={store.facebook}
                className="text-white border-white border-b"
              >
                {"  "}
                {store.name}
                {"  "}
              </a>
              โดยตรง
            </h1>
            <div
              className="logo w-fit h-fit flex items-center gap-2 border-2 p-1 rounded-3xl border-blue-800 cursor-pointer"
              onClick={openModal}
            >
              <img src={AhsanLogo} width={60} height={25} alt="ahsan logo" />
              <article className="text-balance text-blue-950 text-xs">
                <p>สินค้าชนิดนี้ได้รับเครื่องหมายรับรองมาตรฐาน</p>
                <p>AHSAN Trustmark Excellence in Every Product</p>
              </article>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4 text-center">
              Product Information
            </h2>
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-50 rounded-xl shadow-lg p-4"
              >
                <p className="bg-blue-950 bg-opacity-90 text-white text-center rounded-xl p-2 mb-2">
                  {section.title}
                </p>
                {section.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="flex items-center gap-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-check2-circle text-green-600"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </p>
                ))}
              </div>
            ))}
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <StoreFooter />
    </div>
  );
};
export default StoresCard;
