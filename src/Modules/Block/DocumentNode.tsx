import { useEffect, useMemo, useRef, useState } from "react"
import DataNode from "./DataBlock"
import TextNode from "./TextContent"
import DocumentEditor from "./DocumentEditor";
import { Content } from "./_types";

interface Props {
    isReadMode? : boolean
    blockId? : string
}
export default function DocumentNode({
    isReadMode = false,
    blockId = 'dataNode1'
} : Props){

    const [docData, setDocData] = useState<Content[]>([
        {
            contentId : 'node1',
            textArray : ["hi"],
            isEditable : true
        },
        {
            contentId : 'node2',
            textArray : ['hi'],
            isEditable : true
        },
    ]);
    const Editor = useMemo(()=>{
        return new DocumentEditor(blockId);
    },[]);

    useEffect(()=>{
        Editor.setData(docData,setDocData);
    },[docData]);

    function add(){
        const newDocData = [...docData];
        newDocData.push({
            contentId : crypto.randomUUID(),
            textArray : ['new Onew'],
            isEditable : true
        });
        setDocData(newDocData);
    }

    return (
        <div
            contentEditable={!isReadMode}
            suppressContentEditableWarning
            onInput={(e)=>{Editor.fnInput(e)}}
            onSelect={(e)=>{Editor.fnSelect(e)}}
            onKeyDown={(e)=>{Editor.fnKeyDown(e)}}
        >
            <div contentEditable={false}>
                <button onClick={()=>{console.log(docData)}}>show</button>
                <button onClick={add}>add</button>
                <button onClick={()=>{Editor.fnRemove()}}>remove</button>
                <button onClick={()=>{Editor.fnColor()}}>color</button>
            </div>
            <DataNode dataBlockId={blockId}>
                {docData.map(data=>{
                    return (
                        <TextNode key={data.contentId} contentId={data.contentId} textArray={data.textArray} isEditable={data.isEditable} />
                    )
                })}
            </DataNode>
        </div>
    )
}
