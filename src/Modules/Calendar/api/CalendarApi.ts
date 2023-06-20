import { PROFILE } from "src/Utils/Config";
import { HOST } from "../../../Utils/APIUtil";
import { eventList } from "./TempData";

export async function selectEventList(){
    return await fetch(HOST + "/",{
        method : 'get'
    }).then(res=>res.json())
    .catch(e=>{
        if(PROFILE === 'DEV'){
            return eventList;
        }
    });
}