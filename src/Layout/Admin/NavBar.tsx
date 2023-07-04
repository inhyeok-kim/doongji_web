import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Drawer, ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import { useState,useMemo } from "react";
import { blueGrey, grey } from "@mui/material/colors";
import { useLocation, useMatches, useNavigate } from "react-router-dom";

export default function Navbar(){
    const location = useLocation();

    const currMenu = useMemo(()=>{
        const pathname = location.pathname;
        return pathname.substring(1,pathname.length).split('/').reverse();
    },[location]);

    return (
        <Grid2 
            xs={12}
            height={'3rem'}
        >
            <Grid2 
                container
                height={'100%'}
                alignItems={"center"}
                sx={{display : {xs:'none',sm:'block'}}}    
            >
                <Typography variant="h5" color={blueGrey[900]} fontWeight={'bold'}>
                    {
                        currMenu.map((v,i)=>{
                            if(i>0){
                                return <Typography variant="caption" fontSize={'1rem'} color={blueGrey[800]} fontWeight={'bold'}> / {v}</Typography>
                            } else {
                                return v
                            }
                        })
                    }
                </Typography>
            </Grid2>
            
        </Grid2>
        
    )
}


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});
function NavAppBar(){
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const matches = useMatches();

    const currMenu = useMemo(()=>{
        return matches[1].pathname;
    },[matches]);

    function fnLinkTo(url:string){
        navigate(url);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar 
                color="primary"
                position="fixed"
                sx={{height:'3rem',display : {xs:'block',sm:'none'}, zIndex : (theme)=>theme.zIndex.drawer+1}}    
            >
                <Grid2 
                    container
                >
                    <Grid2 xs={2} height={'100%'} textAlign={"center"}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={()=>{setOpenMenu(!openMenu)}}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid2>
                    
                    <Grid2 xs={8} height={'100%'}>

                    </Grid2>
                    <Grid2 xs={2} height={'100%'}>

                    </Grid2>
                </Grid2>
                <Drawer
                    anchor="top"
                    open={openMenu}
                    onClose={()=>{setOpenMenu(false)}}
                    sx={{'& .MuiDrawer-paper' : {top:'48px',background:'white'}}}
                >
                    <Grid2 width={'100vw'}>
                        <MenuList>
                            <MenuItem sx={{color : grey[800]}} selected={currMenu === '/Dashboard'}>
                                <ListItemText>Dashboard</ListItemText>
                            </MenuItem>
                            <MenuItem sx={{color : grey[800]}} selected={currMenu === '/Calendar'}>
                                <ListItemText onClick={()=>{fnLinkTo('/Calendar')}}>Calendar</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Grid2>
                </Drawer>
            </AppBar>
        </ThemeProvider>
    )
}