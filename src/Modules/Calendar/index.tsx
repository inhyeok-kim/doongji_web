import FullCalendar from "@fullcalendar/react";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid'
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";
import timeGridPlugin from '@fullcalendar/timegrid'
import {useEffect,useRef,useState} from 'react';

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


export default function Calendar(){
    const calendarRef : React.LegacyRef<FullCalendar> | undefined = useRef(null);
    const [events,setEvents] = useState(temp_events);

    useEffect(()=>{
        setTimeout(()=>{
            const newEvents = [...events];
            newEvents.push({
                title:'add1',
                start:'2023-05-04'
            });
        },5000);
    },[]);

    function onSelect(e : DateSelectArg){
        let startDate;
        let endDate;
        let startTm;
        let endTm;
        if(e.allDay){
            startDate = e.startStr;
            endDate = e.endStr;
        } else {
            startDate = e.startStr.substring(0,10);
            endDate = e.endStr.substring(0,10);
            startTm = e.startStr.substring(11,16);
            endTm = e.endStr.substring(11,16);
        }
        console.log(startDate,endDate,startTm,endTm);
    }

    function onEventClick(e:EventClickArg){
        console.log(e);
    }

    function onEventHandler(e:EventClickArg){

    }

    return (
        <FullCalendar
            ref={calendarRef}
            selectable={true}
            plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
            initialView="dayGridMonth"
            select={onSelect}
            headerToolbar={{
                left: 'prev,next,today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek' // user can switch between the two
            }}
            dayMaxEvents={true}
            events={events}
            eventClick={onEventClick}
            editable={true}
            eventResizableFromStart={true}
            eventDrop={onEventHandler}
            eventResize={onEventHandler}
            height={'100%'}
      />
    )
}