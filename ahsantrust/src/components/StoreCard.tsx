import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStoreById } from "services/AxiosClient";
import { Store } from "type";
import AhsanLogo from "@assets/AhsanTrustLogo.png";
import NavbarImg from "./common/Navbar-wo";
const StoresCard = () => {
  const [store, setStore] = useState<Store | null>(null);
  const { id } = useParams<{ id: string }>();

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
    <div className="h-screen w-screen flex flex-col items-center gap-10">
      <NavbarImg />
      <div className="certificate bg-blue-100 bg-opacity-70 p-5 flex flex-col gap-4 w-fit items-center rounded-md border border-blue-300 shadow-2xl">
        <div className="flex gap-5">
          <div className="leftside">
            <img
              src={store.images_url}
              alt={store.name}
              className="w-96 h-80 object-cover rounded-br-3xl"
            />
          </div>
          <div className="rightside flex flex-col gap-5">
            <div className="certified">
              <div className="logo-box flex gap-4 items-center">
                <article className="text-balance text-blue-950 text-2xl font-semibold py-3">
                  <p>สินค้าชนิดนี้ได้รับเครื่องหมายรับรองมาตรฐาน</p>
                  <p>AHSAN Trustmark Excellence in Every Product</p>
                </article>
                <img src={AhsanLogo} width={80} height={55} alt="ahsan logo" />
              </div>
            </div>
            <div className="infomation text-md bg-slate-400 bg-opacity-30 rounded-md p-2 flex gap-5">
              {store.logo && (
                <img
                  src={store.logo}
                  alt={store.name}
                  height={100}
                  width={200}
                  className=""
                />
              )}
              <div className="store-detail flex flex-col justify-center gap-2">
                <p>
                  <span className="text-darkBlue font-semibold">
                    ชื่อร้าน:{" "}
                  </span>
                  {store.name}
                </p>
                <p>
                  <span className="text-darkBlue font-semibold">
                    ชนิดสินค้า:{" "}
                  </span>
                  {store.categories}
                </p>
                <p>
                  <span className="text-darkBlue font-semibold">
                    ที่ตั้งร้าน:
                  </span>{" "}
                  {store.location}
                </p>
                {store.phone && (
                  <p>
                    <span className="text-darkBlue font-semibold">
                      ติดต่อ :
                    </span>{" "}
                    {store.phone}
                  </p>
                )}
                {store.facebook && (
                  <p>
                    <span className="text-darkBlue font-semibold">
                      Facebook :
                    </span>{" "}
                    <a href={store.facebook} className="text-blue-500 ">
                      {store.name}
                    </a>
                  </p>
                )}

                {store.instagram && (
                  <p>
                    <span className="text-darkBlue font-semibold">
                      Instagram :
                    </span>{" "}
                    <a href={store.instagram} className="text-blue-500 ">
                      {store.name}
                    </a>
                  </p>
                )}
                <p>
                  <span className="text-darkBlue font-semibold">
                    Active date:
                  </span>{" "}
                  {store.ActiveDate}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-50 rounded-xl shadow-lg p-4"
            >
              <p className="bg-blue-950 bg-opacity-90 text-white text-center rounded-xl p-2 mb-2">
                {section.title}
              </p>
              {section.items.map((item, itemIndex) => (
                <p key={itemIndex} className="flex items-center gap-2">
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
        </div>
      </div>
    </div>
  );
};
export default StoresCard;
