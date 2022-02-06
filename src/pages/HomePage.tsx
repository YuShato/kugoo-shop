import { FC } from "react";
import Actions from "../components/action/Actions";
import BenefitsList from "../components/benefits/BenefitsList";
import CardWrapper from "../components/card/CardWrapper";
import Slider from "../components/carousel/Slider";
import { actions } from "../consts/actions";
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
      <CardWrapper />
      <div className="container">
        <Actions actions={actions} />
      </div>
    </>
  );
};

export default HomePage;
