import { FC } from "react";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

const PlayVideoBtn: FC = () => {
  return (
    <VideoBtn>
      <FaPlay />
    </VideoBtn>
  );
};

const VideoBtn = styled.button`
  position: absolute;
  background: var(--clr-primary-5);
  backdrop-filter: blur(15px);
  width: 136px;
  height: 136px;
  color: var(--clr-primary-1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 36px;
    height: 36px;
  }
`;

export default PlayVideoBtn;
