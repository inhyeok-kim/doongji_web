import { Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { Budget, BudgetOfApi } from "../_types";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import IconProv from "../../IconProv";
import { blueGrey, orange } from "@mui/material/colors";
import { useGetBudgetList } from "../hook/AccountHooks";

export default function BudgetCurrent(){
    const list = useGetBudgetList();

    return <BudgetCurrentView data={list}/>
}


interface ViewProps {
    data? : BudgetOfApi[]
}
function BudgetCurrentView({
    data=[]
}: ViewProps){
    return (
        <Grid2
            padding={0}
        >
            <List dense>
                {
                    data.map(d=>(
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <IconProv />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={d.name} secondary={
                                <><span>{d.useAmount}</span> / <span>{d.amount}</span></>
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
                                {(d.useAmount! / d.amount!).toFixed(2)}%
                            </Paper>
                        </ListItem>
                    ))
                }
                
            </List>
        </Grid2>
    )
}