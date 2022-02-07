import { FC } from "react";
import styled from "styled-components";
import LinkBtn from "../common/LinkBtn";
import AboutListItem from "./AboutListItem";

interface Props {
  aboutInfo: string[];
}

const showSertificate = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("show Sertificate");
};

const AboutList: FC<Props> = ({ aboutInfo }) => {
  return (
    <Wrapper>
      <h4>
        Специализируемся исключительно на бренде Kugoo, поэтому вы получите:
      </h4>
      <ul>
        {aboutInfo.map((item: string, index: number) => {
          return <AboutListItem about={item} key={index} />;
        })}
      </ul>
      <LinkBtn onClickHandler={showSertificate}>Смотреть сертификат</LinkBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-primary-5);
  border-radius: 10px;
  color: var(--clr-primary-2);
  padding: 15px;

  ul {
    margin: 10px;
  }
`;

export default AboutList;
