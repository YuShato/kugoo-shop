import { FC } from "react";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";
import VideoSrc from "./VideoSrc";

const Video: FC = () => {
  return (
    <Container className="container">
      <Wrapper>
        <PlayVideoBtn>
          <FaPlay />
        </PlayVideoBtn>
      </Wrapper>
      <VideoSrc />
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  margin-bottom: 50px;
  width: 100%;
  height: auto;
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/video-cover.jpg") center no-repeat;
`;

const PlayVideoBtn = styled.button`
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

export default Video;
