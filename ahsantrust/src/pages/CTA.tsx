import CTAImage from "../assets/CTA.png";
const CTA = () => {
  return (
    <section className="mt-36 flex items-center justify-center">
      <div className="CTA-block">
        <img src={CTAImage} alt="CTA" height={40} width={40} />
        <div className="CTA-content">
          <h1 className="font-semibold text-4xl text-darkBlue text-center">
            Subscribe For More <br /> Info and update from Hounter
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CTA;
