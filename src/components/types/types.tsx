import { ReactElement, ReactNode } from "react";

export interface IBenefit {
    title: string
    subtitle: string
}

export interface IImage  {
    id: number
    isSpecial: boolean
    title: string | null
    subtitle: string | null
    infoBtn: string  | null
    action: string | null
    src: string | null
}

export interface IBlock {
    link: string
    icon: ReactElement | ReactNode
    info: string
    text_ru: string
}

export interface IPhoneNumber {
    phone: string
    time: string 
    info: string
}

export interface IConnectionLink {
    route: string
    text_ru: string
    type: string
  }

export interface ISocialLink {
    route: string
    text_ru: string
    icon: JSX.Element
}

export interface ICatalogInfo {
    link: string
    name_ru: string
    icon: JSX.Element |  null
}

export interface IMenuLink {
    route: string
    text_ru: string
    info?: string
    icon?: JSX.Element
}

export interface ICatalogOption {
    value: string
    label: string
}