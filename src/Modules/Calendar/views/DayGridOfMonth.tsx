import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import {createMonthDateList} from '../model/Utils';
import { DateData } from "../model/_types";

interface DayGridOfMonthProps {
    stDate : Date
}

export default function DayGridOfMonth({
    stDate
} : DayGridOfMonthProps){
    const [dateList, setDateList] = useState<DateData[]>([]);

    useEffect(()=>{
        setDateList(createMonthDateList(stDate.getFullYear(), stDate.getMonth()+1,'hide'));
    },[stDate]);

    return(
        <Grid2 
            container
            sx={{
                borderLeft : '1px solid black',
                borderTop : '1px solid black',
                fontFamily : 'sans-serif',
                fontWeight : '300',
            }}
        >   
            {
                ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>(
                    <Grid2
                        sx={{
                            borderRight : '1px solid black',
                            borderBottom : '1px solid black',
                            width:'calc(100% / 7)',
                            textAlign : 'center',
                            padding : '5px 0px',
                        }}
                    >
                        {d}
                    </Grid2>
                ))
            }
            {
                dateList.map((v)=>(
                    <Grid2 
                        sx={{
                            borderRight : '1px solid black',
                            borderBottom : '1px solid black',
                            width:'calc(100% / 7)',
                            height : '160px',
                        }}
                    >
                        <Grid2
                            textAlign={'right'}
                            paddingTop={'5px'}
                            paddingBottom={'5px'}
                            paddingRight={'5px'}
                        >
                            {v.date}
                        </Grid2>
                    </Grid2>
                ))
            }

        </Grid2>
    )
}
