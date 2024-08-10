import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStoreById } from "services/AxiosClient";
import { Store } from "type";
import AhsanLogo from "@assets/AhsanTrustLogo.png";
import { data, links, partnership } from "lib/data";
import AhsanTrustLogo from "./shared/ahsanTrustLogo";
import fabric from "@assets/fabric-ahsan.png";
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

  return (
    <div
      className="bg-gray-50 h-screen w-screen"
      style={{
        backgroundImage: `url(${fabric})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <nav className="flex justify-between items-center flex-row p-5">
          <AhsanTrustLogo />
          <div className="flex items-center gap-5 ul-nav">
            <ul className="flex items-center gap-2 z-10">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="bg-transparent px-6 py-2 rounded-full border border-solid border-rgba-74-75-81-30 cursor-pointer"
                  style={{ backdropFilter: "blur(5px)" }}
                >
                  <a
                    href="/"
                    className="text-base font-semibold leading-tight text-brown"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="z-10">
              {/* <a
                href="/"
                className=" py-3 px-6 bg-lightBlue rounded-full text-darkBlue text-base font-semibold leading-22"
              >
                English
              </a> */}
            </div>
          </div>
        </nav>
        <div className="bg-blue-50 rounded-2xl relative w-5/6 ml-28 mt-4 bg-opacity-60">
          <nav className="m-1 flex items-center justify-between">
            <div className="flex items-center gap-2 m-2 justify-between">
              {partnership.map((partner, index) => (
                <img
                  src={partner.url}
                  key={index}
                  width={60}
                  height={60}
                  alt="partnership"
                />
              ))}
            </div>
            <div className="flex items-center px-2">
              <img src={AhsanLogo} width={55} height={55} alt="ahsan logo" />
            </div>
          </nav>
          <div className="flex p-14 gap-12">
            <div className="">
              <div className="rounded-3xl items-center w-96 object-cover bg-blue-400">
                <img
                  src={store.images_url}
                  alt={store.name}
                  className="h-96 w-full object-cover rounded-3xl"
                />
              </div>
              <h1 className="text-2xl text-center mt-8 text-darkBlue font-semibold bg-blue-200 rounded-lg">
                Excellence in Every Product
              </h1>
            </div>

            <div>
              <h1 className="text-5xl font-semibold leading-50 bg-blue-950 text-white mb-4 absolute top-0 p-5 w-fit">
                {store.name}
              </h1>
              <div className="grid grid-cols-2 text-md gap-1">
                <span>
                  <span className="text-darkBlue font-semibold">
                    Product type:{" "}
                  </span>
                  {store.categories}
                </span>
                <span>
                  <span className="text-darkBlue font-semibold">Address:</span>{" "}
                  {store.location}
                </span>
                <p>
                  <span className="text-darkBlue font-semibold">Contact :</span>{" "}
                </p>
                <p>
                  <span className="text-darkBlue font-semibold">
                    Facebook :
                  </span>{" "}
                </p>
                <span>
                  <span className="text-darkBlue font-semibold">
                    Active date:
                  </span>{" "}
                </span>
                <p>
                  <span className="text-darkBlue font-semibold">
                    Instagram :
                  </span>{" "}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-7 pt-12 ">
                {data.map((section, index) => (
                  <div key={index}>
                    <p className="bg-blue-950 text-white p-1 w-2/3 text-center rounded-xl">
                      {section.title}
                    </p>
                    {section.items.map((item, itemIndex) => (
                      <p key={itemIndex} className="pl-2 pt-1 flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          color="#4Fdf4f"
                          fill="currentColor"
                          className="bi bi-check2-circle pt-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg>
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoresCard;
