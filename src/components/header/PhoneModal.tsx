import { FC } from "react";
import { IPhoneNumber } from "../types/types";
import styled from "styled-components";

interface PhoneModalProps {
  phoneNumberArray: IPhoneNumber[];
}

const PhoneModal: FC<PhoneModalProps> = ({ phoneNumberArray }) => {
  return (
    <PhoneModalWrapper className="visually-hidden">
      {phoneNumberArray.map((phoneNumber: IPhoneNumber, index: number) => {
        const { phone, info, time } = phoneNumber;
        return (
          <li key={index}>
            <p>{info}</p>
            <a href={`tel:${phone}`}>{phone}</a>
            {time && <p className="time">{time}</p>}
          </li>
        );
      })}
    </PhoneModalWrapper>
  );
};

const PhoneModalWrapper = styled.ul`
  position: absolute;
  z-index: 5;
  top: 100%;
  right: 0;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(111, 115, 238, 0.1);
  border-radius: 5px;
  width: 247px;
  color: var(--clr-primary-3);
  font-size: 12px;
  line-height: 17px;

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: var(--clr-primary-2);
  }

  li {
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eaebed;
  }

  .time {
    color: var(--clr-primary-2);
    padding-top: 3px;
  }
`;

export default PhoneModal;
