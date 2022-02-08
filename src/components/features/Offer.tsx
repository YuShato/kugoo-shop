import { FC } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FeatureTypes } from "../../consts/features";
import { PageRoute } from "../../consts/menu";
import DefaultText from "../common/DefaultText";
import BgBlock from "./BgBlock";

interface Props {
  type: string;
}

const Offer: FC<Props> = ({ type }) => {
  return (
    <Card>
      <Wrapper>
        <DefaultText>
          {type === FeatureTypes.shop
            ? "Больше в каталоге"
            : "Больше в сервисе"}
        </DefaultText>
        <Link
          className="link"
          to={
            type === FeatureTypes.shop
              ? PageRoute.products.route
              : PageRoute.service.route
          }
        >
          Перейти <BsArrowRight />
        </Link>
      </Wrapper>
      <BgBlock type={type} />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f4f7fb;
  border-radius: 10px;
  width: auto;
  max-width: 350px;
`;

const Wrapper = styled.div`
  padding: 33px;
  padding-right: 0;
  display: grid;
  align-items: center;
`;

export default Offer;
