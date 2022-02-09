import { FC } from "react";
import styled from "styled-components";
import PlayVideoBtn from "./PlayVideoBtn";
import VideoSrc from "./VideoSrc";

const Video: FC = () => {
  return (
    <Container className="container">
      <Wrapper>
        <PlayVideoBtn/>
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

export default Video;
