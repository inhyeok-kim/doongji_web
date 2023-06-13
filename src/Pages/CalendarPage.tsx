import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Paper } from "@mui/material";
import Calendar from "../Modules/Calendar";

export default function CalendarPage(){
    
    return (
        <Paper
            elevation={1}
            sx={{
                width:'100%',
                padding : '1rem',
                boxSizing:"border-box",
                height : '100%'
            }}
        >
            <Calendar />
        </Paper>
    )
}