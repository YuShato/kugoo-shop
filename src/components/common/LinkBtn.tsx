import { FC, JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode } from "react";

interface Props {
  onClickHandler: MouseEventHandler<HTMLButtonElement> | undefined;
  children: string | Element | ReactElement<any, string | JSXElementConstructor<any>>[] | (Element & string) | ReactNode
}

const LinkBtn: FC<Props> = ({ onClickHandler, children }) => {
  return <button className="link" onClick={onClickHandler}>{children}</button>;
};


export default LinkBtn;
