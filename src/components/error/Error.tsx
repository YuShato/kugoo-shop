import { FC } from "react";
import DefaultTitle from "../common/DefaultTitle";

interface Props {
  error: string;
}

const Error: FC<Props> = ({ error }) => {
  return (
    <div className="container">
      <DefaultTitle title={error}></DefaultTitle>
    </div>
  );
};

export default Error;
