import { FC } from "react";
import { RiScalesLine } from "react-icons/ri";
import styled from "styled-components";

interface ScaleProps {
  isCompare: boolean;
}

const addToCompare = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("item add to compare");
};

const ScaleIcon: FC<ScaleProps> = ({ isCompare }) => {
  return (
    <Scale className={isCompare ? "compare" : ""}>
      <button
        title={isCompare ? "добавлено в список сравнения" : "добавить в список сравнения"}
        onClick={addToCompare}
      >
        <RiScalesLine />
      </button>
    </Scale>
  );
};

const Scale = styled.div`
  position: absolute;
  z-index: 5;
  right: 10px;
  top: 15px;

  button {
    width: 40px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  & svg {
    fill: var(--clr-primary-3);
    width: 30px;
    height: 20px;
  }

  &.compare svg {
    fill: var(--clr-primary-1);
  }
`;

export default ScaleIcon;
