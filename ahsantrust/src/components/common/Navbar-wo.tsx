import { useState } from "react";
import { links } from "../../lib/data";
import AhsanTrustLogo from "../shared/ahsanTrustLogo";
import { IoMdMenu, IoMdClose } from "react-icons/io"; 

function NavbarImg() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="flex items-center justify-between w-full p-2 relative">
      <div className="flex-shrink-0">
        <AhsanTrustLogo />
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-darkBlue">
          {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden "
        } absolute top-full left-0 w-full bg-white p-4 lg:relative lg:flex lg:items-center lg:justify-end lg:gap-10 lg:p-0 lg:bg-transparent`}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-3 lg:gap-3 z-10">
          {links.map((link, index) => (
            <li
              key={index}
           
              className={`px-6 py-2 rounded-full ${
                isOpen ? "" : "border border-solid border-rgba-74-75-81-30"
              } text-gray-700`}
              style={{ backdropFilter: "blur(5px)" }}
            >
              <a
                href={link.hash}
                className="text-base font-semibold leading-tight text-brown"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* <div className="z-10 mt-3 lg:mt-0 items-center">
          <a
            href="/"
            className={`px-6 py-2 text-base font-semibold leading-22 ${
              isOpen ? "" : "bg-lightBlue rounded-full text-darkBlue"
            } text-gray-700`}
          >
            English
          </a>
        </div> */}
      </div>
    </nav>
  );
}

export default NavbarImg;
