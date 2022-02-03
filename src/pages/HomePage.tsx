import { FC } from "react";
import BenefitsList from "../components/benefits/BenefitsList";
import Slider from "../components/carousel/Slider";
import benefits from "../consts/benefit";
import images from "../consts/images";

const HomePage: FC = () => {
  return (
    <>
      <div className="container">
        <Slider images={images} />
      </div>
      <div className="container">
        <BenefitsList benefitsList={benefits} />
      </div>
    </>
  );
};

export default HomePage;
