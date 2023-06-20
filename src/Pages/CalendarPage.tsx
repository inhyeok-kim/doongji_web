import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PlannerWidget from "../Modules/Calendar/Widget/PlannerWidget";
import GlassWidget from "../Layout/Widget/GlassWidget";
import SandBox from "src/Modules/SandBox/SandBox";

export default function CalendarPage(){
    
    return (
        <Grid2
            height={'100%'}
        >
            <GlassWidget
                width="100%"
                height="100%"
            >
                <SandBox />
                {/* <PlannerWidget /> */}
            </GlassWidget>
        </Grid2>
    )
}