import { FC } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import styled from "styled-components";

interface Props {
  about: string;
}

const AboutListItem: FC<Props> = ({ about }) => {
  return (
    <ListItem>
      <AiOutlineCaretLeft />
      {about}
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  
  svg {
    fill: var(--clr-primary-7);
    width: 10px;
    height: 10px;
  }
`;

export default AboutListItem;
