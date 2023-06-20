import { HOST } from "../../../Utils/APIUtil";

export async function selectEventList(){
    return await fetch(HOST + "/",{
        method : 'get'
    }).then(res=>res.json());
}