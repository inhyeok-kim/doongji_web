import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TodayTradeList from "../Modules/Account/Widget/TodayTradeList";
import GlassWidget from "../Layout/Widget/GlassWidget";
import BudgetCurrent from "../Modules/Account/Widget/BudgetCurrent";
import { Paper } from "@mui/material";

export default function BudgetPage(){

    return (
        <Grid2>
            <Grid2
                marginBottom={'20px'}
                container
                justifyContent={"space-between"}
            >
                <GlassWidget
                    title = "Today"
                    width="calc(60% - 10px)"
                    marginRight="10px"
                    height="500px"
                    >
                    <TodayTradeList />       
                </GlassWidget>
                <GlassWidget
                    title="Budget"
                    width="calc(40% - 10px)"
                    marginLeft="10px"
                    height="500px"
                >
                    <BudgetCurrent />       
                </GlassWidget>
            </Grid2>
            <Grid2
                container
                justifyContent={"space-between"}
            >
                <GlassWidget
                    title = "Today"
                    width="calc(60% - 10px)"
                    marginRight="10px"
                    height="500px"
                    >
                    <TodayTradeList />       
                </GlassWidget>
                <GlassWidget
                    title="Budget"
                    width="calc(40% - 10px)"
                    marginLeft="10px"
                    height="500px"
                >
                    <BudgetCurrent />       
                </GlassWidget>
            </Grid2>
        </Grid2>
    )
}