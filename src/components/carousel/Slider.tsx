import { FC } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";
import { IImage } from "../../types/types";
import SlideItem from "./SlideItem";

interface ImagesListProps {
  images: IImage[];
}

const Slider: FC<ImagesListProps> = ({ images }) => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;
        let mouseOver: boolean = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 30000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="container">
      <SliderWrapper ref={sliderRef} className="keen-slider banners">
        {images.map((image: IImage, index: number) => {
          return <SlideItem {...image} key={index} />;
        })}
      </SliderWrapper>
    </div>
  );
};

const SliderWrapper = styled.div`
  height: 420px;
  width: 100%;
  border-radius: 10px;
  position: relative;
  margin-top: 30px;
`;

export default Slider;
