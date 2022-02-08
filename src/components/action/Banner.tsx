import { FC } from "react";
import styled from "styled-components";
import DefaultTitle from "../common/DefaultTitle";
import BannerLink from "./BannerLink";

interface Props {
  banner: string;
}

const Banner: FC<Props> = ({ banner }) => {
  return (
    <div className="container">
      <Wrapper>
        <ImageWrapper />
        <article>
          <AccentLabel>Акция</AccentLabel>
          <Title title={banner} />
          <BannerLink />
        </article>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  overflow: hidden;
  background: radial-gradient(
    76.7% 707.77% at 23.3% 72.57%,
    #595959 0%,
    #3b3e46 100%
  );
  border-radius: 10px;
  width: 100%;
  max-width: 1380px;
  margin-bottom: 100px;

  article {
    width: 50%;
    padding-top: 67px;
    padding-bottom: 67px;
    display: grid;
    gap: 27px;
  }

  h3 {
    color: var(--clr-primary-5);
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  background-image: url("../../assets/img/action/banner.png");
  background-size: cover;
  background-position: center center;
  min-height: 200px;
  height: auto;
  background-repeat: no-repeat;
  transform: rotate(-6.38deg);
`;

const Title = styled(DefaultTitle)``;

const AccentLabel = styled.span`
  display: flex;
  justify-self: flex-start;
  font-size: 14px;
  line-height: 20px;
  color: var(--clr-primary-5);
  background-color: var(--clr-primary-7);
  padding: 3px 11px;
  border-radius: 5px;
`;

export default Banner;
