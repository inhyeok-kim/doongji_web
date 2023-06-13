import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Aside from "./Admin/Aside";
import Body from "./Admin/Body";

export default function AdminLayout(){
    return (
        <Grid2 container>
            <Aside />
            <Body />
        </Grid2>
    )
}