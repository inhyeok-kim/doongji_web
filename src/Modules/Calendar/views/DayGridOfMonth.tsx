import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import {createMonthDateList, createMonthDateListRange} from '../model/Utils';
import { CalendarOption, DateData, Event } from "../model/_types";
import { blueGrey } from "@mui/material/colors";
import { Typography } from "@mui/material";
import { ClickAwayListener } from '@mui/base';

export default function DayGridOfMonth({
    stDate = new Date(),
    isVerticalScroll,
    overType = 'hide',
    onClick = ()=>{},
    onDragEnd = ()=>{},
    events
} : CalendarOption){
    const [dateList, setDateList] = useState<DateData[]>([]);
    const [eventArray , setEventArray] = useState<Event[]>();
    
    const [selectedDateList, setSelectedDateList] = useState<DateData[]>([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectStartIndex,setSelectStartIndex] = useState<number>();
    const [selectEndIndex,setSelectEndIndex] = useState<number>();

    useEffect(()=>{
        const arr = events?.map(e=>{
            const event = {...e};
            const startStr = e.start!.substring(0,e.start!.indexOf('T'));
            const endStr = e.end!.substring(0,e.end!.indexOf('T'));
            event.startDate = new Date(startStr);
            event.endDate = new Date(endStr);
            return event;
        });
        arr?.sort((a,b)=>{
            if(a.isAllDay && !b.isAllDay){
                return -1;
            }
            if(!a.isAllDay && b.isAllDay){
                return 1;
            }
            return b.startDate!.getTime() - a.startDate!.getTime();
        })
        setEventArray(arr);
    },[events]);

    useEffect(()=>{
        console.log(eventArray);
    },[eventArray]);

    useEffect(()=>{
        if(isVerticalScroll){
            const startDate = new Date(stDate);
            startDate.setMonth(stDate.getMonth()-3);
            let list : DateData[] = createMonthDateListRange(startDate.getFullYear(),startDate.getMonth()+1,6);
            setDateList(list);
        } else {
            setDateList(createMonthDateList(stDate.getFullYear(), stDate.getMonth()+1,overType));
        }
    },[stDate]);

    function selectDate(){
        setSelectedDateList(dateList.slice(Math.min(selectStartIndex!,selectEndIndex!),Math.max(selectStartIndex!,selectEndIndex!)+1));
    }

    function clickDate(date : DateData){
        setSelectedDateList([date]);
        onClick(date);
    }

    function mouseDownDate(date : DateData, index : number){
        setIsSelecting(true);
        setSelectStartIndex(index);
        setSelectEndIndex(index);
        selectDate();
    }

    function mouseMoveDate(date : DateData, index : number){
        if(isSelecting){
            setSelectEndIndex(index);
            selectDate();
        }
    }

    function onMouseUp(){
        setIsSelecting(false);
        if(selectStartIndex !== selectEndIndex){
            onDragEnd(selectedDateList);
        }
    }

    function onMouseLeave(){
        setIsSelecting(false);
    }

    function handleClickAway(){
        setIsSelecting(false);
        setSelectedDateList([]);
    }

    return(
        <Grid2 
            sx={{
                // borderLeft : '1px solid black',
                // borderTop : '1px solid black',
                fontFamily : 'sans-serif',
                fontWeight : '300',
                '& *' : {
                    userSelect : 'none',
                    WebkitUserSelect : 'none',
                    MozUserSelect : 'none',
                    msUserSelect : 'none',
                }
            }}
            height={'100%'}
        >
            

            <Grid2
                container
            >
                { // 요일 표시
                    ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>(
                        <Grid2
                            key={d}
                            sx={{
                                // borderRight : '1px solid black',
                                // borderBottom : '1px solid black',
                                background: "rgba( 255, 255, 255, 0.4 )",
                                backdropFilter: 'blur( 5px )',
                                width:'calc(100% / 7)',
                                textAlign : 'center',
                                padding : '3px 0px',
                            }}
                        >
                            <Typography color={blueGrey[900]} fontWeight={'bold'} fontSize={'0.9rem'}>
                                {d}
                            </Typography>
                        </Grid2>
                    ))
                }
            </Grid2>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div    
                    style={{
                        width:'100%',
                        height:'100%'
                    }}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                >
                    <Grid2
                        container
                        height={'calc(100% - 32px)'}
                        overflow={isVerticalScroll ? 'auto' : ''}
                    >
                        { // 날짜 표시
                            dateList.map((v,i)=>(
                                v.text ? 
                                <DayGrid 
                                    key={i}
                                    date={v}
                                    index={i}
                                    isSelected={selectedDateList.findIndex(i=>i.date === v.date) > -1}
                                    onClick={clickDate}
                                    onMouseDown={mouseDownDate}
                                    onMouseMove={mouseMoveDate}
                                >
                                    {
                                        eventArray?.filter(e=>{
                                            if(e.startDate! <= new Date(v.text!) && e.endDate! >= new Date(v.text!)){
                                                return true
                                            }
                                        }).map(e=>{
                                            return <div style={{background : e.isAllDay ? 'black' : '', color : e.isAllDay ? 'white' : ''}}>
                                                {e.title}
                                            </div>
                                        })
                                    }
                                </DayGrid>
                                :
                                <DayGrid 
                                    key={i}
                                    date={v}
                                >
                                </DayGrid>
                                
                            ))
                        }
                    </Grid2>
                </div>
            </ClickAwayListener>

        </Grid2>
    )
}

interface DayGridProp {
    children? : React.ReactNode
    date : DateData
    index? : number
    onClick? : Function
    onMouseDown? : Function
    onMouseMove? : Function
    isSelected? : boolean
}
function DayGrid({
    children,
    date,
    index,
    onClick = ()=>{},
    onMouseDown = ()=>{},
    onMouseMove = ()=>{},
    isSelected,
}:DayGridProp){

    function clickHandler(){
        onClick(date);
    }

    function mouseDownHandler(){
        onMouseDown(date,index);
    }

    function mouseMoveHandler(){
        onMouseMove(date,index);
    }

    return (
        <Grid2 
            sx={{
                // borderRight : '1px solid black',
                borderBottom : '1px solid '+blueGrey[50],
                width:'calc(100% / 7)',
                height : 'calc(100% / 6)',
                minHeight : '60px',
                background : isSelected ? 'white':'',
                '&:hover' : {background : 'white'}
            }}
        >
            <div
                style={{
                    width:'100%',
                    height : '100%'
                }}
                onClick={clickHandler}
                onMouseDown={mouseDownHandler}
                onMouseMove={mouseMoveHandler}
            >
                <Grid2
                    textAlign={'right'}
                    paddingTop={'5px'}
                    paddingBottom={'5px'}
                    paddingRight={'5px'}
                >
                    <Typography color={blueGrey[700]} fontSize={'0.9rem'}>
                        {date.date}
                    </Typography>
                </Grid2>
                <Grid2>
                    {children}
                </Grid2>
            </div>
        </Grid2>
    )
}
