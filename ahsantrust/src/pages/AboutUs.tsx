import NavbarImg from "components/common/Navbar-wo";
import BgAboutUs from "@assets/bg-about-us.png";
import AHSAN from "@assets/AHSAN Trustmark.png";
import { ahsan } from "lib/data";

export function AboutUs() {
  return (
    <div className="">
      <NavbarImg />
      <div className="relative w-full h-1/2 mt-0">
        <img src={BgAboutUs} alt="" className="h-full w-full object-cover" />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <img src={AHSAN} alt="" className="h-64" />
          <p className="text-lg mt-4">
            AHSAN Trustmark : Global Excellence in Curation and Creation
          </p>
          {/* Wavy button */}
          <button className="mt-5 px-6 py-2 bg-blue-700 text-white font-semibold rounded-full wavy-button">
            Join with us
          </button>
        </div>
      </div>
      <div className="content">
      {ahsan.map((item, index) => (
        <div key={index} className="flex items-center p-2">
          <span className="text-6xl font-bold text-blue-900">{item.letter}</span>
          <div className="ml-4">
            <span className="text-sm text-gray-800">
              <strong>{item.title}:</strong> {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
