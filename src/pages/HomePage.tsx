import { FC } from "react";
import About from "../components/about/About";
import Actions from "../components/action/Actions";
import Banner from "../components/action/Banner";
import BenefitsList from "../components/benefits/BenefitsList";
import CardWrapper from "../components/card/CardWrapper";
import Slider from "../components/carousel/Slider";
import Categories from "../components/categories/Categories";
import Features from "../components/features/Features";
import { actions, banner } from "../consts/actions";
import benefits from "../consts/benefit";
import { categories } from "../consts/categories";
import { FeatureFilters, FeatureList, FeatureTypes } from "../consts/features";
import images from "../consts/images";

const HomePage: FC = () => {
  return (
    <>
      <Slider images={images} />
      <BenefitsList benefitsList={benefits} />
      <CardWrapper />
      <Actions actions={actions} />
      <Banner banner={banner} />
      <Categories categories={categories} />
      <About />
      <Features
        featuresList={FeatureList}
        filters={FeatureFilters}
        type={FeatureTypes.shop}
      />
      {/* type={FeatureTypes.shop} сделать динамичным!!!! */}
    </>
  );
};

export default HomePage;
