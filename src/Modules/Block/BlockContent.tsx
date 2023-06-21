import { ReactNode, useState } from "react"

interface Props{
    contentId : string
    isEditable? : boolean
    initHtml? : ReactNode | ReactNode[]
    fnChange? : Function
}
export default function Block({
    contentId,
    isEditable = false,
    initHtml = '',
    fnChange = ()=>{}
}:Props){

    return (
        <div
            data-content-id={contentId}
            contentEditable={isEditable}
            suppressContentEditableWarning
        >
            {initHtml}
        </div>
    )
}