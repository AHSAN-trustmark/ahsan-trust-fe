import NavbarImg from "components/common/Navbar-wo";
import BgAboutUs from "@assets/bg-about-us.png";
import AHSAN from "@assets/AHSAN Trustmark.png";
import { ahsan } from "lib/data";
import Footer from "components/common/Footer";

export function AboutUs() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <NavbarImg />

      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          src={BgAboutUs}
          alt="Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <img src={AHSAN} alt="AHSAN Trustmark" className="h-36 md:h-48" />
          <p className="text-lg md:text-lg mt-4 font-semibold">
            AHSAN Trustmark: Global Excellence in Curation and Creation
          </p>
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition duration-300">
            Join with us
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
          About AHSAN
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Discover our mission, vision, and the unique values that make AHSAN
          Trustmark a global leader in curation and creation.
        </p>

        {/* Horizontal Scrollable Row */}
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
          {ahsan.map((item, index) => (
            <div
              key={index}
              className="flex-none w-64 bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <div className="text-6xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                {item.letter}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
