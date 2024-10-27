import AhsanTrustLogo from "components/shared/ahsanTrustLogo";

const Footer = () => {
  return (
    <footer className="mt-5 flex items-center justify-between mb-5">
      <AhsanTrustLogo />
      <span className="text-sm leading-6 text-darkGrey">
        © 2024 AHSAN Trustmark. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
