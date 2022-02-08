import { FC } from "react";
import styled from "styled-components";
import { IAction } from "../types/types";
import ActionItem from "./ActionItem";

interface Props {
  actions: IAction[];
}

const Actions: FC<Props> = ({ actions }) => {
  return (
    <div className="container">
      <Wrapper>
        {actions.map((item: IAction, index: number) => {
          return <ActionItem action={item} key={index} />;
        })}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-top: 60px;
  justify-content: space-between;
  margin-bottom: 110px;
`;

export default Actions;
