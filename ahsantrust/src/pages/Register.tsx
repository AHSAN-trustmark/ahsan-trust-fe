import NavbarImg from "components/common/Navbar-wo";
import RegisterProductForm from "components/RegisterForm";
import Ahsan from "@assets/LeftImage.png";
export function Register() {
  return (
    <div className="h-screen w-screen">
      <NavbarImg />
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Ahsan})` }}
      ></div>
      <RegisterProductForm />
    </div>
  );
}
