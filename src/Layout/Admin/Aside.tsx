import { Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AsideMenuList from "../../Modules/Aside/AsideMenuList";

export default function Aside(){
    
    return (
        <Grid2
            xl={1}
            sm={2}
            xs={0}
            sx={{
                display : {sm:'block', xs:'none'}
            }}
            boxShadow={'-5px 1px 10px 0px grey'}
            zIndex={1}
        >
            <Grid2
                container
                height={'3rem'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    ourFam
                </Typography>
            </Grid2>
            <Divider />
            <AsideMenuList/>
            
        </Grid2>
    )
}