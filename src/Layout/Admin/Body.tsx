import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import GlassWidget from "../Widget/GlassWidget";

export default function Body(){
    return (
        <Grid2
            width={'calc(100% - 200px)'}
            paddingLeft={2}
        >
            <GlassWidget>

                <Navbar />
                <Grid2
                    xs={12}
                    padding={'1rem'}
                    height={'calc(100% - 3rem)'}
                >
                    <Outlet />
                </Grid2>
            </GlassWidget>
        </Grid2>
    )
}