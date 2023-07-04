import { Collapse, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SavingsIcon from '@mui/icons-material/Savings';
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState} from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function AsideMenuList(){
    const [openAccount, setOpenAccount] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const currMenu = useMemo(()=>{
        const pathname = location.pathname;
        return pathname;
    },[location]);

    useEffect(()=>{
        setOpenAccount(false);
        if(currMenu.includes('/Account')){
            setOpenAccount(true);
        }
    },[currMenu]);

    function fnLinkTo(url:string){
        navigate(url);
    }

    return (
        <MenuList>
            <MenuItem sx={{color : blueGrey[700]}} selected={currMenu === '/Dashboard'}>
                <ListItemIcon>
                    <DashboardIcon sx={{color:blueGrey[700]}} />
                </ListItemIcon>
                <ListItemText>대시보드</ListItemText>
            </MenuItem>
            <MenuItem sx={{color : blueGrey[700]}} selected={currMenu === '/Calendar'}>
                <ListItemIcon>
                    <CalendarMonthIcon sx={{color:blueGrey[700]}} />
                </ListItemIcon>
                <ListItemText onClick={()=>{fnLinkTo('/Calendar')}}>일정</ListItemText>
            </MenuItem>
            <MenuItem sx={{color : blueGrey[700]}} selected={currMenu === '/Account'} onClick={()=>{setOpenAccount(curr=>!curr)}}>
                <ListItemIcon>
                    <SavingsIcon sx={{color:blueGrey[700]}} />
                </ListItemIcon>
                <ListItemText onClick={()=>{fnLinkTo('/Account')}}>가계부</ListItemText>
                { openAccount ? <ExpandLess /> : <ExpandMore /> }
            </MenuItem>
            <Collapse in={openAccount} unmountOnExit>
                <MenuList component="div" disablePadding>
                    <MenuItem sx={{color : blueGrey[700], pl: 4 }} selected={currMenu === '/Account/Asset'} >
                        <ListItemText onClick={()=>{fnLinkTo('/Account/Asset')}} primary="자산관리" />
                    </MenuItem>
                    <MenuItem sx={{color : blueGrey[700], pl: 4 }} selected={currMenu === '/Account/Budget'} >
                        <ListItemText onClick={()=>{fnLinkTo('/Account/Budget')}} primary="예산관리" />
                    </MenuItem>
                    <MenuItem sx={{color : blueGrey[700], pl: 4 }} selected={currMenu === '/Account/Trade'} >
                        <ListItemText onClick={()=>{fnLinkTo('/Account/Trade')}} primary="거래관리" />
                    </MenuItem>
                </MenuList>
            </Collapse>
        </MenuList>
    )
}