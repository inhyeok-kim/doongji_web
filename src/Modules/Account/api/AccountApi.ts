import { PROFILE } from "src/Utils/Config";
import { HOST } from "../../../Utils/APIUtil";
import { BudgetOfApi, TradeOfApi } from "../_types";
import { getBudgetDataList, getTradeDataList } from "./TempData";

export async function selectTradeList(){
    return await fetch(HOST + "/",{
        method : 'get'
    }).then(res=>res.json())
    .catch(e=>{
        if(PROFILE === 'DEV'){
            return getTradeDataList();
        }
    }) as TradeOfApi[];
}
export async function selectBudgetList(){
    return await fetch(HOST + "/",{
        method : 'get'
    }).then(res=>res.json())
    .catch(e=>{
        if(PROFILE === 'DEV'){
            return getBudgetDataList();
        }
    }) as BudgetOfApi[] ;
}