import { useParams } from "react-router-dom"

export default function Test(){
    const { text } = useParams();

    return(
        <div>
            hi
            <br/>
            {text}
        </div>
    )
}