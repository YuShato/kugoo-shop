import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { FaHandHoldingWater, FaShoppingBasket } from "react-icons/fa";
import { RiWallet3Fill } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import { FiPercent } from "react-icons/fi";
import { GiAutoRepair } from "react-icons/gi";
import { BsCalendar3Week } from "react-icons/bs";

const MAX_FEATURES_AMOUNT = 5;

const FeatureTypes = {
  shop: "shop",
  service: "service",
};

const FeatureFilters = [
  { name: "Интернет-магазин", isActive: true, value: FeatureTypes.shop },
  { name: "Сервисный центр", isActive: false, value: FeatureTypes.service },
];

const FeatureList = [
  {
    icon: <FaShoppingBasket />,
    subtitle: "Х товаров в каталоге",
    text: "Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении. ",
    type: FeatureTypes.shop,
  },
  {
    icon: <RiWallet3Fill />,
    subtitle: "5 способов оплаты",
    text: "Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».",
    type: FeatureTypes.shop,
  },
  {
    icon: <AiTwotoneSafetyCertificate />,
    subtitle: "Полная документация и гарантия 1 год",
    text: "При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.",
    type: FeatureTypes.shop,
  },
  {
    icon: <GrDeliver />,
    subtitle: "Отправка заказа день в день",
    text: "Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре",
    type: FeatureTypes.shop,
  },
  {
    icon: <FiPercent />,
    subtitle: "Рассрочка без переплат",
    text: "В нашем магазине можно приобрести любой товар в рассрочку.",
    info: "Подробнее про условия рассрочки",
    type: FeatureTypes.shop,
  },
  // 
  {
    icon: <GiAutoRepair />,
    subtitle: "Ремонт от 1 дня",
    text: "Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.",
    type: FeatureTypes.service,
  },
  {
    icon: <FaHandHoldingWater />,
    subtitle: "Гидроизоляция для долгой службы",
    text: "Покроем электросамокат изнутри специальным веществом, которое предотвратит попадание влаги и позволит кататься в любое время года.",
    type: FeatureTypes.service,
  },
  {
    icon: <AiTwotoneSafetyCertificate />,
    subtitle: "Ремонтируем только то, что сломалось",
    text: "Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.",
    type: FeatureTypes.service,
  },
  {
    icon: <BsCalendar3Week />,
    subtitle: "Даем гарантию 14 дней на ремонт",
    text: null,
    type: FeatureTypes.service,
  },
  {
    icon: <FiPercent />,
    subtitle: "Оригинальные запчасти",
    text: "Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.",
    type: FeatureTypes.service,
  },
];

export { FeatureFilters, FeatureList, MAX_FEATURES_AMOUNT, FeatureTypes };
