import {useState, useEffect, useRef, ReactNode} from 'react';
import { Observer } from 'src/Remote/Remote';

export default function SandBox(){
    const [data, setData] = useState([{id:1,data:'someData'}, {id:1,data:'simpleData'}]);

    useEffect(()=>{
        setInterval(()=>{
            Observer.onchange(1,'changeData');
        },5000);
    },[]);

    return(
        <div>
            {data.map((v,i)=>(
                <Subscriber key={v.id + i} id={v.id} data={v.data} />
            ))}
        </div>
    )
}

function Subscriber({
    id, data
}:{
    id : number
    data : string
}){
    const [str, setStr] = useState(data);
    const obSeq = useRef<number>(0);

    useEffect(()=>{
        console.log(str);
    },[str]);
    useEffect(()=>{
        const seq = Observer.doSubscribe(id,setStr);
        obSeq.current = seq;
        setTimeout(()=>{
            console.log(obSeq.current);
            if(obSeq.current === 0){
                Observer.unSubscribe(id, obSeq.current);
            }
        },6000);
    },[]);


    function change(e:string){
        console.log(e);
    }

    return (
        <EditableDiv onChange={change}>
            {str}
        </EditableDiv>
    )
}

interface EditalbleDivProps {
    children? : ReactNode
    onChange? : (value : string) => void
}

function EditableDiv({
    children,
    onChange = ()=>{}
} : EditalbleDivProps){

    const value = useRef(children);

    function fnChange(e:React.ChangeEvent<HTMLDivElement>){
        onChange(e.target.innerHTML);
    }

    return (
        <div
            contentEditable
            onChange={fnChange}
            suppressContentEditableWarning
        >
            {value.current}
        </div>
    )
}