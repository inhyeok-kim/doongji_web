import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import DayGridOfMonth from "./views/DayGridOfMonth";

const temp_events = [
    {
        title : 'temp1',
        start : '2023-05-19'
    },
    {
        title : 'temp2',
        start : '2023-05-19',
        end : '2023-05-20'
    },
    {
        title : 'temp3',
        start : '2023-05-19T12:30'
    },
    {
        title : 'temp4',
        start : '2023-05-19',
        end : '2023-05-20'
    },
    {
        title : 'temp5',
        start : '2023-05-05T12:30',
        end : '2023-05-07'
    },
]

/**
 * 
 * 메모
 * 캘린더에 일정을 추가할 때, state를 변경해 버리면 interaction 중일 경우 문제가 발생할 수 있다.
 * 따라서 변경된 일정 사항을 원격으로 받아올 때는 직접 calendarAPi로 제어해야 할 것으로 보임.
 */

interface CalendarProps {
    calendarType? : 'dayOfMonth' | 'monthOfYear' | 'dayOfWeek'
    year? : number | string
    month? : number | string
}

const Calendar = forwardRef(({
    calendarType = 'dayOfMonth',
    year,
    month
} : CalendarProps, ref)=>{

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

        }
    });

    return (
        <Grid2>
            {
                calendarType === 'dayOfMonth' ? 
                <DayGridOfMonth stDate={stDate}/>
                :
                ''
            }
        </Grid2>
    )
});

export default Calendar;
