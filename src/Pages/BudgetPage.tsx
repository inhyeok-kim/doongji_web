import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TodayTradeList from "../Modules/Budget/Widget/TodayTradeList";
import GlassWidget from "../Layout/Widget/GlassWidget";
import BudgetCurrent from "../Modules/Budget/Widget/BudgetCurrent";
import { Paper } from "@mui/material";

export default function BudgetPage(){

    return (
        <Grid2>
            <Grid2
                container
                spacing={5}
                justifyContent={"space-between"}
            >
                <GlassWidget
                    width="calc(60% - 10px)"
                    marginRight="10px"
                    >
                    <TodayTradeList />       
                </GlassWidget>
                <GlassWidget
                    title="Budget"
                    width="calc(40% - 10px)"
                    marginLeft="10px"
                >
                    <BudgetCurrent />       
                </GlassWidget>
            </Grid2>
        </Grid2>
    )
}