import {useState, useEffect, useRef, ReactNode} from 'react';
import DocumentNode from 'src/Modules/Block/DocumentNode';

export default function SandBox(){

    return (
        <DocumentNode />
    )
    // const [data, setData] = useState([{id:1,data:'someData'}, {id:2,data:'simpleData'}]);

    // return(
    //     <div contentEditable suppressContentEditableWarning>
    //         {data.map((v,i)=>(
    //             <Subscriber key={v.id + i} id={v.id} data={v.data} />
    //         ))}
    //     </div>
    // )
}

function Subscriber({
    id, data
}:{
    id : number
    data : string
}){
    const [str, setStr] = useState(data);

    function change(e:string){
        console.log(e);
    }

    return (
        <div contentEditable={id===1} suppressContentEditableWarning>
            <EditorBlock onChange={change}>
                {str}
            </EditorBlock>
        </div>
    )
}

interface EditalbleDivProps {
    children? : ReactNode
    onChange? : (value : string) => void
    isEditable? : boolean
}

function EditorBlock({
    children,
    onChange = ()=>{},
    isEditable = true
} : EditalbleDivProps){

    const value = useRef(children);

    function fnChange(e:React.ChangeEvent<HTMLDivElement>){
        console.log('hi');
        value.current = e.target.innerHTML;
        onChange(e.target.innerHTML);
    }

    return (
        <div
            contentEditable={isEditable}
            onInput={fnChange}
            onChange={fnChange}
            suppressContentEditableWarning
        >
            {value.current}
        </div>
    )
}