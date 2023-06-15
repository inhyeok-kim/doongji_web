import { HOST } from "../../../Utils/APIUtil";

export async function selectTradeList(){
    return await fetch(HOST + "/",{
        method : 'get'
    }).then(res=>res.json());
}
export async function selectBudgetList(){
    return await fetch(HOST + "/",{
        method : 'get'
    }).then(res=>res.json());
}