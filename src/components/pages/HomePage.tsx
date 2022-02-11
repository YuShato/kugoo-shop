import { FC } from "react";
import About from "../about/About";
import Actions from "../action/Actions";
import Banner from "../action/Banner";
import BenefitsList from "../benefits/BenefitsList";
import CardWrapper from "../card/CardWrapper";
import Slider from "../carousel/Slider";
import Categories from "../categories/Categories";
import Features from "../features/Features";
import Video from "../video/Video";
import { actions, banner } from "../../consts/actions";
import benefits from "../../consts/benefit";
import { categories } from "../../consts/categories";
import { FeatureFilters, FeatureList, FeatureTypes } from "../../consts/features";
import images from "../../consts/images";

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
      <Video/>
      {/* type={FeatureTypes.shop} сделать динамичным!!!! */}
    </>
  );
};

export default HomePage;
