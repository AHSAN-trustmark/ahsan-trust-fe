import { links } from "../../lib/data";
import AhsanTrustLogo from "../shared/ahsanTrustLogo";
// import { IoMdMenu } from "react-icons/io";

function NavbarImg() {
  return (
    <nav className="flex items-center justify-between w-full p-2">
      <AhsanTrustLogo />
      <div className="flex items-center gap-10 ul-nav">
        <ul className="flex items-center gap-3 z-10">
          {links.map((link, index) => (
            <li
              key={index}
              className="bg-transparent px-6 py-1 rounded-full border border-solid border-rgba-74-75-81-30"
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
          <a
            href="/"
            className=" py-3 px-6 bg-lightBlue rounded-full text-darkBlue text-base font-semibold leading-22"
          >
            English
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarImg;
