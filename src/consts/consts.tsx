import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const LinkType = {
  CONNECT: "connect",
  MENU: "menu",
  SOCIAL: "social",
};

const MenuLinkArray = [
  {
    route: "/about",
    text_ru: "О магазине",
    info: null,
  },
  {
    route: "/shipping",
    text_ru: "Доставка и оплата",
    info: "Доступна рассрочка",
  },
  {
    route: "/testDrive",
    text_ru: "Тест-драйв",
    info: null,
  },
  {
    route: "/blog",
    text_ru: "Блог",
    info: null,
  },
  {
    route: "/contacts",
    text_ru: "Контакты",
    info: null,
  },
  {
    route: "/actions",
    text_ru: "Акции",
    info: "%",
  },
];

const ConnectLinkArray = [
  {
    route: "/service",
    text_ru: "Сервис",
    type: LinkType.CONNECT,
  },
  {
    route: "/partnership",
    text_ru: "Сотрудничество",
    type: null,
  },
];

const SocialLinkArray = [
  {
    route: "#",
    text_ru: "Телеграм",
    icon: <FaTelegram />,
  },
  {
    route: "#",
    text_ru: "WhatsApp",
    icon: <FaWhatsapp />,
  },
  {
    route: "#",
    text_ru: "Позвонить",
    icon: <FiPhoneCall />,
  },
];

const PageRoute = {
  main: {
    route: "/",
    text_ru: "Главная",
    type: LinkType.MENU,
  },
  about: {
    route: "/about",
    text_ru: "О магазине",
    type: LinkType.MENU,
  },
  actions: {
    route: "/actions",
    text_ru: "Акции",
    info: "%",
    type: LinkType.MENU,
  },
  blog: {
    route: "/blog",
    text_ru: "Блог",
    type: LinkType.MENU,
  },
  partnership: {
    route: "/partnership",
    text_ru: "Сотрудничество",
    type: LinkType.CONNECT,
  },
  connect: {
    route: "/connect",
    text_ru: "Заказать звонок",
    type: LinkType.CONNECT,
  },
  contacts: {
    route: "/contacts",
    text_ru: "Контакты",
    type: LinkType.MENU,
  },
  products: {
    route: "/products",
    text_ru: "Каталог",
    type: LinkType.MENU,
  },
  service: {
    route: "/service",
    text_ru: "Сервис",
    type: LinkType.CONNECT,
  },
  shipping: {
    route: "/shipping",
    text_ru: "Доставка и оплата",
    info: "Доступна рассрочка",
    type: LinkType.MENU,
  },
  testDrive: {
    route: "/testDrive",
    text_ru: "Тест-драйв",
    type: LinkType.MENU,
  },
};

const PhoneNumberArray = [
  { phone: "+ 7 (499) 350-76-92", info: "Сервисный центр", time: null },
  {
    phone: "+7 (499) 281-64-52",
    info: "Оптовый отдел",
    time: "пн-сб 10:00 - 19:00",
  },
  {
    phone: "+7 (499) 350-76-92",
    info: "Отдел рекламаций и претензий",
    time: "ср-вс с 10:00 до 19:00",
  },
];

const MAX_PRODUCTS_LENGTH = 8;

export {
  MAX_PRODUCTS_LENGTH,
  PageRoute,
  LinkType,
  MenuLinkArray,
  SocialLinkArray,
  ConnectLinkArray,
  PhoneNumberArray,
};
