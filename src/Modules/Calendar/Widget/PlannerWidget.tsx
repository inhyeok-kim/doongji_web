import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {useRef} from 'react';
import { CalendarAPI, DateData } from "../model/_types";
import PlannerCalendar from "../PlannerCalendar";

export default function PlannerWidget(){
    const CalApi = useRef<CalendarAPI>();

    function goNextMonth(){
        CalApi.current?.goNextMonth();
    }
    function goPrevMonth(){
        CalApi.current?.goPrevMonth();
    }

    function onDateClick(date:DateData){
        console.log(date);
    }
    function onDateDrag(date:any){
        console.log(date);
    }

    return (
        <Grid2
            height={'100%'}
        >
            {/* <button onClick={goPrevMonth}>Prev</button>
            <button onClick={goNextMonth}>Next</button> */}
            <PlannerCalendar 
                ref={CalApi} 
                overType={"hide"} 
                isVerticalScroll={false}
                height={'calc(100% - 30px)'}
                onClick={onDateClick}
                onDragEnd={onDateDrag}
            />
        </Grid2>
    )
}