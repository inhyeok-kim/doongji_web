import { ReactNode, useState } from "react"
import BlockContent from "./BlockContent"

interface Props{
    contentId : string
    isEditable? : boolean
    textArray? : Array<ReactNode>
    fnChange? : Function
}
export default function TextNode({
    contentId,
    isEditable = false,
    textArray = [],
    fnChange = ()=>{}
}:Props){

    const [html, setHtml ] = useState(textArray);

    function getDataToHtml(){

    }

    return (
        <BlockContent contentId={contentId} initHtml={html} isEditable={isEditable}/>
    )
}

interface TextData {

}