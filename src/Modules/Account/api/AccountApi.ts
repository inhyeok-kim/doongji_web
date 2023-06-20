import { HOST } from "../../../Utils/APIUtil";
import { BudgetOfApi, TradeOfApi } from "../_types";
import { getBudgetDataList, getTradeDataList } from "./TempData";

export async function selectTradeList(){
    return await fetch(HOST + "/",{
        method : 'get'
    }).then(res=>res.json())
    .catch(e=>{
        return getTradeDataList();
    }) as TradeOfApi[];
}
export async function selectBudgetList(){
    return await fetch(HOST + "/",{
        method : 'get'
    }).then(res=>res.json())
    .catch(e=>{
        return getBudgetDataList();
    }) as BudgetOfApi[] ;
}