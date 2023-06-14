import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
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
            <MenuItem sx={{color : blueGrey[700]}} selected={currMenu === '/Dashboard'}>
                <ListItemIcon>
                    <DashboardIcon sx={{color:blueGrey[700]}} />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </MenuItem>
            <MenuItem sx={{color : blueGrey[700]}} selected={currMenu === '/Calendar'}>
                <ListItemIcon>
                    <CalendarMonthIcon sx={{color:blueGrey[700]}} />
                </ListItemIcon>
                <ListItemText onClick={()=>{fnLinkTo('/Calendar')}}>Calendar</ListItemText>
            </MenuItem>
            <MenuItem sx={{color : blueGrey[700]}} selected={currMenu === '/Account'}>
                <ListItemIcon>
                    <SavingsIcon sx={{color:blueGrey[700]}} />
                </ListItemIcon>
                <ListItemText onClick={()=>{fnLinkTo('/Account')}}>Account</ListItemText>
            </MenuItem>
        </MenuList>
    )
}