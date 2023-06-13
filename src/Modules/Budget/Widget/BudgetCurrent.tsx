import { Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { Budget } from "../_types";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import IconProv from "../../IconProv";
import { blueGrey, orange } from "@mui/material/colors";

export default function BudgetCurrent(){
    return <BudgetCurrentView />
}


interface ViewProps {
    data? : Budget[]
}
function BudgetCurrentView({
    data
}: ViewProps){
    return (
        <Grid2>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <IconProv />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="예산1" secondary={
                        <><span>14,232</span> / <span>5,230</span></>
                    } />
                    <Paper
                        elevation={0}
                        sx={{
                            background : blueGrey[50],
                            display : 'flex',
                            justifyContent : 'center',
                            alignItems : 'center',    
                            width:'60px',
                            height : '35px',
                            fontSize : '0.9rem',
                            lineHeight : '1.6',
                            borderRadius : '10px',
                            color : orange[500]
                        }}
                    >
                        50%
                    </Paper>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <IconProv />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="예산1" secondary={
                        <><span>14,232</span> / <span>5,230</span></>
                    } />
                    <Paper
                        elevation={0}
                        sx={{
                            background : blueGrey[50],
                            display : 'flex',
                            justifyContent : 'center',
                            alignItems : 'center',    
                            width:'60px',
                            height : '35px',
                            fontSize : '0.9rem',
                            lineHeight : '1.6',
                            borderRadius : '10px',
                            color : orange[500]
                        }}
                    >
                        50%
                    </Paper>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <IconProv />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="예산1" secondary={
                        <><span>14,232</span> / <span>5,230</span></>
                    } />
                    <Paper
                        elevation={0}
                        sx={{
                            background : blueGrey[50],
                            display : 'flex',
                            justifyContent : 'center',
                            alignItems : 'center',    
                            width:'60px',
                            height : '35px',
                            fontSize : '0.9rem',
                            lineHeight : '1.6',
                            borderRadius : '10px',
                            color : orange[500]
                        }}
                    >
                        50%
                    </Paper>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <IconProv />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="예산1" secondary={
                        <><span>14,232</span> / <span>5,230</span></>
                    } />
                    <Paper
                        elevation={0}
                        sx={{
                            background : blueGrey[50],
                            display : 'flex',
                            justifyContent : 'center',
                            alignItems : 'center',    
                            width:'60px',
                            height : '35px',
                            fontSize : '0.9rem',
                            lineHeight : '1.6',
                            borderRadius : '10px',
                            color : orange[500]
                        }}
                    >
                        50%
                    </Paper>
                </ListItem>
            </List>
        </Grid2>
    )
}