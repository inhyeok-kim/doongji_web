import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material"
import { grey } from "@mui/material/colors"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SavingsIcon from '@mui/icons-material/Savings';
import { useMatches, useNavigate } from "react-router-dom";
import { useMemo} from 'react';

export default function AsideMenuList(){
    const navigate = useNavigate();
    const matches = useMatches();

    const currMenu = useMemo(()=>{
        return matches[1].pathname;
    },[matches]);

    function fnLinkTo(url:string){
        navigate(url);
    }

    return (
        <MenuList>
            <MenuItem sx={{color : "white"}} selected={currMenu === '/Dashboard'}>
                <ListItemIcon>
                    <DashboardIcon sx={{color:'white'}} />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </MenuItem>
            <MenuItem sx={{color : "white"}} selected={currMenu === '/Calendar'}>
                <ListItemIcon>
                    <CalendarMonthIcon sx={{color:'white'}} />
                </ListItemIcon>
                <ListItemText onClick={()=>{fnLinkTo('/Calendar')}}>Calendar</ListItemText>
            </MenuItem>
            <MenuItem sx={{color : "white"}} selected={currMenu === '/Budget'}>
                <ListItemIcon>
                    <SavingsIcon sx={{color:'white'}} />
                </ListItemIcon>
                <ListItemText onClick={()=>{fnLinkTo('/Budget')}}>Budget</ListItemText>
            </MenuItem>
        </MenuList>
    )
}