import { FC } from "react";
import styled from "styled-components";
import { IAction } from "../../types/types";
import { Link } from "react-router-dom";
import { PageRoute } from "../../consts/menu";
import { BsArrowRight } from "react-icons/bs";
import ActionTitle from "./ActionTitle";
import DefaultText from "../common/DefaultText";

interface Props {
  action: IAction;
}

const ActionItem: FC<Props> = ({ action }) => {
  const { id, title, offer } = action;
  return (
    <Wrapper>
      <div>
        <ActionTitle title={title} />
        <DefaultText>{offer}</DefaultText>
        <Link to={PageRoute.actions.route}>
          Подобрать модель <BsArrowRight />
        </Link>
      </div>
      <ImageWrapper id={id.toString()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: var(--clr-primary-4);
  border-radius: 10px;

  div {
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    width: 60%;
    padding: 32px 40px;
  }
  & a {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--clr-primary-1);
    margin-top: 22px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const ImageWrapper = styled.div`
  background: ${(props) =>
    `url(../../assets/img/action/action${props.id}.png) no-repeat`};
  width: 40%;
  height: 100%;
  border-radius: 10px;
  background-position-x: right;
  background-size: cover;
`;

export default ActionItem;
