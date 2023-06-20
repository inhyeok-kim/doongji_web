import { Asset, Budget, BudgetOfApi, Trade, TradeOfApi } from "../_types";

const tradeDatas : Trade[] = [
    { // 1번 자산에서 1번 예산(지출)
        id : '1',
        amount : 10000,
        budgetId : '1',
        fromAssetId : '1',
        type : 'expend',
        datetime : '20230612'
    },
    { // 1번 자산에서 2번 예산(수익)
        id : '2',
        amount : 5000,
        budgetId : '2',
        fromAssetId : '1',
        type : 'income',
        datetime : '20230612'
    },
    { // 1번 자산에서 1번 예산(지출)
        id : '3',
        amount : 12000,
        budgetId : '3',
        fromAssetId : '2',
        type : 'expend',
        datetime : '20230612'
    },
]
const budgetDatas : Budget[] = [
    {
        id : '1',
        name : '예산1(지출)',
        type : 'expend',
        amount : 15000,
    },
    {
        id : '2',
        name : '예산2(수입)',
        type : 'income',
    },
    {
        id : '3',
        name : '예산3(지출)',
        type : 'expend',
        amount : 550000,
    },
];
const assetDatas : Asset[] = [
    {
        id : '1',
        name : '자산1',
        type : 'asset',
    },
    {
        id : '2',
        name : '카드1',
        type : 'card',
    },
    {
        id : '3',
        name : '부채1',
        type : 'debt',
    },
    {
        id : '4',
        name : '투자1',
        type : 'invest',
    },
];

export function getBudgetDataList() : BudgetOfApi[]{
    return budgetDatas.filter(v=>v.type==="expend").map(budget=>{
        const apiData : BudgetOfApi = budget;
        apiData.useAmount = tradeDatas.filter(v=>v.budgetId === budget.id).reduce((p,c)=>p+c.amount!,0);
        return apiData;
    });
}

export function getTradeDataList() : TradeOfApi[]{
    const list = tradeDatas.map(data =>{
        const apiData : TradeOfApi = data;
        apiData.fromAssetName = assetDatas.find(d=>d.id === apiData.fromAssetId)?.name;
        switch (data.type) {
            case "income": case"expend" :
                apiData.budgetName = budgetDatas.find(d=>d.id === apiData.budgetId)?.name;
                break;
            case "transfer": case "buy": case "sell":
                apiData.toAssetName = assetDatas.find(d=>d.id === apiData.toAssetId)?.name;
                break;
            default:
                break;
        }
        return apiData;
    });
    return list as TradeOfApi[];
}
