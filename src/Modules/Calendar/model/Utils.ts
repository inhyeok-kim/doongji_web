import { DateData } from "./_types";

export function createMonthDateListRange(year : number | string, month : number | string, range : number){
    const dateList : DateData[] = [];
    const start = new Date(year+"-"+month.toString().padStart(2,'0')+"-"+'01');
    const startDate = new Date(start.getTime());
    
    const endDate = new Date(startDate.getTime());
    endDate.setMonth(startDate.getMonth()+range);
    endDate.setDate(0);
    endDate.setDate(endDate.getDate()+(6-endDate.getDay()));
    startDate.setDate(-(start.getDay()-1));

    for(let date = startDate; date.getTime() <= endDate.getTime(); date.setDate(date.getDate()+1)){
        
        const dateText = formatDateString(date);
        const dateData : DateData = {
            text : dateText,
            date : date.getDate().toString().padStart(2,'0'),
            dayOfWeek :  date.getDay(),
            month : (date.getMonth()+1).toString().padStart(2,'0'),
            year : date.getFullYear().toString(),
        };
        
        dateList.push(dateData);
    }
    
    return dateList;
}
export function createMonthDateList(year : number | string, month : number | string, overType : 'hide'|'show'|'none' = 'hide' ){
    const dateList : DateData[] = [];
    const start = new Date(year+"-"+month.toString().padStart(2,'0')+"-"+'01');
    const startDate = new Date(start.getTime());
    
    if(overType !== 'none'){
        startDate.setDate(-(start.getDay()-1));
    }

    const endDate = new Date(startDate.getTime());
    if(overType === 'none'){
        endDate.setMonth(startDate.getMonth()+1);
        endDate.setDate(0);
    } else {
        endDate.setDate(startDate.getDate() +41);
    }

    for(let date = startDate; date.getTime() <= endDate.getTime(); date.setDate(date.getDate()+1)){
        let isHide = false;
        if(overType === 'hide'){
            if(start.getMonth() !== date.getMonth()){
                isHide = true;
            }
        }
        
        let dateData : DateData = {};
        if(!isHide){
            const dateText = formatDateString(date);
            dateData = {
                text : dateText,
                date : date.getDate().toString().padStart(2,'0'),
                dayOfWeek :  date.getDay(),
                month : (date.getMonth()+1).toString().padStart(2,'0'),
                year : date.getFullYear().toString(),
            };
        }
        

        
        dateList.push(dateData);
    }
    
    return dateList;
}


export function formatDateString(date : Date) : string{
    return date.getFullYear() +'-'+ String(date.getMonth()+1).padStart(2,'0') +'-'+ String(date.getDate()).padStart(2,'0');
}

export function compareTime(a : string,b:string){
    const _a = parseInt(a.replace(":",''));
    const _b = parseInt(b.replace(":",''));
    
    return _a-_b;
}