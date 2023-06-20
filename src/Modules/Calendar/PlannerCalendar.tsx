import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import DayGridOfMonth from "./views/DayGridOfMonth";
import { CalendarAPI, CalendarOption } from "./model/_types";

/**
 * 
 * 메모
 * 캘린더에 일정을 추가할 때, state를 변경해 버리면 interaction 중일 경우 문제가 발생할 수 있다.
 * 따라서 변경된 일정 사항을 원격으로 받아올 때는 직접 calendarAPi로 제어해야 할 것으로 보임.
 */

const PlannerCalendar = forwardRef(({
    calendarType = 'dayOfMonth',
    year,
    month,
    overType,
    isVerticalScroll,
    width = '100%',
    height = '100%',
    onClick = ()=>{},
    onDragEnd = ()=>{},
    onDragStart = ()=>{}
} : CalendarOption, ref)=>{

    const [stDate, setStDate] = useState<Date>(new Date());

    useEffect(()=>{
        const date = new Date();
        if(year){
            date.setFullYear(parseInt(year.toString()));
        }
        if(month){
            date.setMonth(parseInt(month.toString())-1);
        }
        setStDate(date);
    },[year, month]);
    
    useImperativeHandle(ref,()=>{
        return {
            goNextMonth : function(){
                const newDate = new Date(stDate);
                newDate.setMonth(newDate.getMonth()+1);
                setStDate(newDate);
            },
            goPrevMonth : function(){
                const newDate = new Date(stDate);
                newDate.setMonth(newDate.getMonth()-1);
                setStDate(newDate);
            },
            getCurrentDate : function(){
                return stDate;
            }
        } as CalendarAPI
    });

    return (
        <Grid2
            width={width}
            height={height}
        >
            {
                calendarType === 'dayOfMonth' ? 
                <DayGridOfMonth 
                    stDate={stDate} 
                    overType={overType}
                    isVerticalScroll={isVerticalScroll}
                    onClick={onClick}
                    onDragEnd={onDragEnd}
                    onDragStart={onDragStart}
                />
                :
                ''
            }
        </Grid2>
    )
});

export default PlannerCalendar;
