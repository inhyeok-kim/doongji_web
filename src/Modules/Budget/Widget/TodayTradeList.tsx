import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useGetTradeList } from "../TempApi"
import { TradeOfApi } from "../_types";

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
        <Grid2>
            <TableContainer>
                <Table>
                    <TableBody>
                        {
                            data.map(d=>(
                                <TableRow>
                                    <TableCell>
                                        {d.fromAssetName}
                                    </TableCell>
                                    <TableCell>
                                        {
                                            d.toAssetName ? d.toAssetName
                                            : d.budgetName ? d.budgetName
                                            : ''
                                        }
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

