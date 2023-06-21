import { ReactNode, useEffect } from "react";
import { doSubscribe, unSubscribe } from "src/Remote/Remote";

interface Props {
    children? : ReactNode
    dataBlockId : string
    callback? : Function
}
export default function DataBlock({
    children,
    dataBlockId,
    callback = ()=>{}
} : Props){
    useEffect(()=>{
        console.log('hi');
        const seq = doSubscribe(dataBlockId, callback);
        return ()=>{
            unSubscribe(dataBlockId, seq);
        }
    },[]);
    
    return (
        <div data-block-id={dataBlockId}>
            {children}
        </div>
    )
}