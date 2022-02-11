import { IImage } from "../types/types";

const images: IImage[] = [
  {
    id: 1,
    isSpecial: true,
    title: "Электросамокаты Kugoo Kirin от официального дилера",
    subtitle: "с бесплатной доставкой по РФ от 1 дня",
    infoBtn: "Новинка",
    action: "Перейти в каталог",
    src: undefined,
  },
  {
    id: 2,
    isSpecial: true,
    title: "Шлем в подарок при покупке самоката",
    subtitle: "32 цвета на выбор",
    infoBtn: "Подарок",
    action: "Перейти в  каталог",
    src: undefined,
  },
  {
    id: 3,
    isSpecial: false,
    src: "./assets/slider/img/3.jpg",
    title: undefined,
    subtitle: undefined,
    infoBtn: undefined,
    action: undefined,
  },
  {
    id: 4,
    isSpecial: false,
    src: "./assets/slider/img/4.jpg",
    title: undefined,
    subtitle: undefined,
    infoBtn: undefined,
    action: undefined,
  },
  {
    id: 5,
    isSpecial: false,
    src: "./assets/slider/img/5.jpg",
    title: undefined,
    subtitle: undefined,
    infoBtn: undefined,
    action: undefined,
  },
];

export default images;
