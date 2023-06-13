import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Aside from "./Admin/Aside";
import Body from "./Admin/Body";
import GlassWidget from "./Widget/GlassWidget";

export default function AdminLayout(){
    return (
        <Grid2 
            padding={3}
            height={'100vh'}
            minHeight={'700px'}
            minWidth={'1200px'}
        >
            <Grid2
                position={'fixed'}
                top={0}
                left={0}
                height={'100%'}
                width={'100%'}
                sx={{
                    background : 'linear-gradient(132deg,#94a9cb 5%,#70a5e1 20%,#5f9bdf 60%,#2f6ed3 95%);'
                }}
                zIndex={-3}
                >
            </Grid2>
            <GlassWidget
                height="100%"
                width="100%"
            >
                <Grid2
                    container
                    height="100%"
                >
                    <Aside />
                    <Body />
                </Grid2>
            </GlassWidget>
        </Grid2>
    )
}