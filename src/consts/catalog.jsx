import { GiKickScooter, GiScooter, GiDutchBike } from 'react-icons/gi'
import { IoIosRadioButtonOn } from 'react-icons/io'
import { IoScaleSharp } from 'react-icons/io5'

const CatalogInfoArray = {
  types: [
    {
      link: `/kickScooters`,
      name_ru: 'Электросамокаты',
      icon: <GiKickScooter />
    },
    {
      link: `/scooters`,
      name_ru: 'Электроскутеры',
      icon: <GiScooter />
    },
    {
      link: `/electricBike`,
      name_ru: 'Электровелосипеды',
      icon: <GiDutchBike />
    },
    {
      link: `/roomba`,
      name_ru: 'Робот-пылесосы',
      icon: <IoIosRadioButtonOn />
    },
    {
      link: `/scales`,
      name_ru: 'Весы',
      icon: <IoScaleSharp />
    }
  ],
  special: [
    { link: '/crosscountry', name_ru: 'Внедорожный' },
    { link: '/urban', name_ru: 'Городской' },
    { link: '/winter', name_ru: 'Зимний' },
    { link: '/seat', name_ru: 'С сиденьем' },
    { link: '/withoutSeat', name_ru: 'Без сиденья' }
  ],
  prescription: [
    { link: '/kids', name_ru: 'Для детей' },
    { link: '/adults', name_ru: 'Для взрослых' },
    { link: '/senior', name_ru: 'Для пенсионеров' }
  ]
}


const CatalogSelectOptions = [
  { value: 'all', label: 'Везде' },
  { value: 'kicks', label: 'Самокаты' },
  { value: 'access', label: 'Аксессуары' }
]

export { CatalogInfoArray, CatalogSelectOptions }
