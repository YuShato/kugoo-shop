import { GiKickScooter, GiScooter, GiDutchBike } from "react-icons/gi";
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoScaleSharp } from "react-icons/io5";

const CatalogInfoArray = {
  types: [
    {
      link: `/kickScooters`,
      name_ru: "Электросамокаты",
      icon: <GiKickScooter />,
    },
    {
      link: `/scooters`,
      name_ru: "Электроскутеры",
      icon: <GiScooter />,
    },
    {
      link: `/electricBike`,
      name_ru: "Электровелосипеды",
      icon: <GiDutchBike />,
    },
    {
      link: `/roomba`,
      name_ru: "Робот-пылесосы",
      icon: <IoIosRadioButtonOn />,
    },
    {
      link: `/scales`,
      name_ru: "Весы",
      icon: <IoScaleSharp />,
    },
  ],
  special: [
    { link: "/crosscountry", name_ru: "Внедорожный", icon: null },
    { link: "/urban", name_ru: "Городской", icon: null },
    { link: "/winter", name_ru: "Зимний", icon: null },
    { link: "/seat", name_ru: "С сиденьем", icon: null },
    { link: "/withoutSeat", name_ru: "Без сиденья", icon: null },
  ],
  prescription: [
    { link: "/kids", name_ru: "Для детей", icon: null },
    { link: "/adults", name_ru: "Для взрослых", icon: null },
    { link: "/senior", name_ru: "Для пенсионеров", icon: null },
  ],
};

const CatalogSelectOptions = [
  { value: "all", label: "Везде" },
  { value: "kicks", label: "Самокаты" },
  { value: "access", label: "Аксессуары" },
];

export { CatalogInfoArray, CatalogSelectOptions };
