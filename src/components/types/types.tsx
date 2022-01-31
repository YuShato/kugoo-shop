import { ReactElement, ReactNode } from "react";

export interface IBenefit {
    title: string
    subtitle: string
}

export interface IImage  {
    id: number
    isSpecial: boolean
    title: string
    subtitle: string
    infoBtn: string
    action: string
}

export interface IBlock {
    link: string
    icon: ReactElement | ReactNode
    info: string
    text_ru: string
}