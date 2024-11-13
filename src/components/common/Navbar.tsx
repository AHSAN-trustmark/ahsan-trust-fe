import { links } from "../../lib/data";
import AhsanTrustLogo from "../shared/ahsanTrustLogo";
import { IoMdMenu } from "react-icons/io";
import LeftImage from "@assets/LeftImage.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center flex-row pt-5">
      <img src={LeftImage} alt="" className="absolute right-0.5 top-0 h-4/5" />
      <AhsanTrustLogo />
      <div className="flex items-center gap-5 ul-nav">
        <ul className="flex items-center gap-3 z-10">
          {links.map((link, index) => (
            <li
              key={index}
              className="bg-transparent px-6 py-1 rounded-full border border-solid border-rgba-74-75-81-30"
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

        <div className="z-10">
          <a
            href="/"
            className=" py-3 px-6 bg-lightBlue rounded-full text-darkBlue text-base font-semibold leading-22"
          >
            English
          </a>
        </div>
        <IoMdMenu />
      </div>
    </nav>
  );
}

export default Navbar;
