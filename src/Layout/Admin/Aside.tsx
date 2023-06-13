import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AsideMenuList from "../../Modules/Aside/AsideMenuList";
import { grey } from "@mui/material/colors"

export default function Aside(){
    
    return (
        <Grid2
            minWidth={'200px'}
        >
            <Grid2
                container
                height={'4rem'}
                alignItems={'center'}
                color={grey[700]}
                paddingLeft={2}
            >
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        fontSize : '1.5rem'
                    }}
                >
                    DGJI
                </Typography>
            </Grid2>
            <AsideMenuList/>
                
        </Grid2>
        
    )
}