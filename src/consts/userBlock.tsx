import { RiScalesLine, RiShoppingBasket2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";

const UserBlockData = [
  {
    link: "/compare",
    icon: <RiScalesLine />,
    info: "список сравнения",
    text_ru: null,
  },
  {
    link: "/favorites",
    icon: <MdFavoriteBorder />,
    info: "избранное",
    text_ru: null,
  },
  {
    link: "/cart",
    icon: <RiShoppingBasket2Line />,
    info: "корзина",
    text_ru: "Корзина",
  },
];

export { UserBlockData };
