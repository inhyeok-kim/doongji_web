import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useGetTradeList } from "../TempApi"
import { TradeOfApi } from "../_types";
import IconProv from "../../IconProv";

export default function TodayTradeList(){
    const tradeList = useGetTradeList();

    return (
        <TodayTradeListView data={tradeList} />
    )
}

interface ViewProps {
    data : TradeOfApi[]
}
function TodayTradeListView({
    data
}: ViewProps){

    return (
        <Grid2
            padding={0}
        >
            <TableContainer>
                <Table>
                    <TableBody>
                        {
                            data.map(d=>(
                                <TableRow>
                                    <TableCell>
                                        <Grid2
                                            container
                                            alignItems={'center'}
                                        >
                                            <IconProv />
                                            {d.fromAssetName}
                                        </Grid2>
                                        
                                    </TableCell>
                                    <TableCell>
                                        <Grid2
                                            container
                                            alignItems={'center'}
                                        >
                                            <IconProv />
                                            {
                                                d.toAssetName ? d.toAssetName
                                                : d.budgetName ? d.budgetName
                                                : ''
                                            }
                                        </Grid2>
                                    </TableCell>
                                    <TableCell>
                                        {d.amount}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid2>
    )
}

