import { partnership } from "lib/data";
import { HiMiniMapPin } from "react-icons/hi2";

function Header() {
  return (
    <header className="header relative">
      <div className="header-left">
        <div>
          <h1 className="text-5xl font-bold leading-50 text-darkBlue">
            We Help Our <br /> Locals Achieve{" "}
            <span
              className="text-transparent"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "rgba(27, 28, 87, 1)",
              }}
            >
              {" "}
              Their{" "}
            </span>{" "}
            <br /> Dreams Here
          </h1>
        </div>
        <div>
          <p className="text-lg font-normal leading-28 text-darkGrey mt-9">
            AHSAN Trustmark is a dedicated research organization committed to{" "}
            <br />
            fostering the growth and sustainability of local businesses.
          </p>
        </div>
        <form className="input-area">
          <input
            type="text"
            placeholder="Search for the shop you want!         "
          />
          <button className="icon">
            <HiMiniMapPin className="w-6 h-6" />
          </button>
          <button className="Button">Search {" >"}</button>
        </form>
        <div className="mt-4">
          <p className="text-lightGrey font-normal text-base">
            Our Partnership
          </p>

          <div className="gap-100">
            <div className="flex items-center gap-8 mt-2">
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
          </div>
        </div>
      </div>

      <div className="header-right-small-device">
        <img src="/assets/LeftImage.png" alt="AhsanTrustBg" />
      </div>
      <div className="header-right ">
        <img src="/assets/LeftImage.png" alt="" />
      </div>
    </header>
  );
}

export default Header;
