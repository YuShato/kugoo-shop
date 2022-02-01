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