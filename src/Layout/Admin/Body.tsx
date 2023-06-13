import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Body(){
    return (
        <Grid2
            xl={11}
            sm={10}
            xs={12}
            minHeight={'100vh'}
            bgcolor={grey[50]}
        >
            <Navbar />
            <Grid2
                xs={12}
                padding={'1rem'}
                height={'calc(100% - 3rem)'}
            >
                <Outlet />
            </Grid2>
        </Grid2>
    )
}