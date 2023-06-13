import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TodayTradeList from "../Modules/Budget/Widget/TodayTradeList";

export default function BudgetPage(){

    return (
        <Grid2>
            <Grid2
                width={'800px'}
            >
                <TodayTradeList />       
            </Grid2>
        </Grid2>
    )
}