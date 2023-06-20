import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PlannerWidget from "../Modules/Calendar/Widget/PlannerWidget";
import GlassWidget from "../Layout/Widget/GlassWidget";

export default function CalendarPage(){
    
    return (
        <Grid2
            height={'100%'}
        >
            <GlassWidget
                width="100%"
                height="100%"
            >
                <PlannerWidget />
            </GlassWidget>
        </Grid2>
    )
}