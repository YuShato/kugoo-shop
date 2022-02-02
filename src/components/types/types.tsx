import { ReactElement, ReactNode } from "react";

export interface IBenefit {
    title: string
    subtitle: string
}

export interface IImage  {
    id: number
    isSpecial: boolean
    title?: string
    subtitle?: string
    infoBtn?: string 
    action?: string 
    src?: string 
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
    icon?: JSX.Element 
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

export interface SelectOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

  export  interface IUserBlock {
    link: string
    icon: JSX.Element
    info: string
    text_ru: string
  }