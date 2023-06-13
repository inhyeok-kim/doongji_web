export type AssetType = 'asset' | 'card' | 'debt' | 'invest';
export interface Asset {
    id? : string
    name? : string
    amount? : number
    iconNum? : number
    type? : AssetType
};

export type BudgetType = 'expend'|'income';
export interface Budget {
    id? : string
    name? : string
    iconNum? : number
    type? : BudgetType
};

export type TradeType = 'expend'|'income'| 'transfer'| 'revenue'| 'loss'| 'buy'| 'sell';
export interface Trade {
    id? : string
    type? : TradeType
    fromAssetId? : string
    toAssetId? : string
    budgetId? : string
    amount? : number
    datetime? : string
};

export interface TradeOfApi extends Trade{
    fromAssetName? : string
    toAssetName? : string
    budgetName? : string
    budgetIconNum? : number
    fromAssetIconNum? : number
    toAssetIconNum? : number
}