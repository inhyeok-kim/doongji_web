import { ReactNode } from "react"

export interface Content{
    contentId : string
    isEditable? : boolean
    textArray? : ReactNode[]
}

export interface Node {
    dataset : any
}