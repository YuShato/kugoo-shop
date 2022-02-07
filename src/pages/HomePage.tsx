import { FC } from "react";
import About from "../components/about/About";
import Actions from "../components/action/Actions";
import Banner from "../components/action/Banner";
import BenefitsList from "../components/benefits/BenefitsList";
import CardWrapper from "../components/card/CardWrapper";
import Slider from "../components/carousel/Slider";
import Categories from "../components/categories/Categories";
import { actions, banner } from "../consts/actions";
import benefits from "../consts/benefit";
import { categories } from "../consts/categories";
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
      <div className="container">
        <Banner banner={banner} />
      </div>
      <Categories categories={categories}/>
      <About />
    </>
  );
};

export default HomePage;
