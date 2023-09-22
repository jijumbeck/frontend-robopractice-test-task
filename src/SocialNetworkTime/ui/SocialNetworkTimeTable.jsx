import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { getClientTimeForMonth, mapTimeHoursMinToString } from "../helpers/mapClientObject";
import './SocialNetworkTime.css';


const days = Array(31).fill(0).map((elem, index) => index + 1);

Table.Head = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell className="SocialNetworkTimeFirstColumn">User</TableCell>
                {
                    days.map(day => <TableCell key={day}>{day}</TableCell>)
                }
                <TableCell className="SocialNetworkTimeLastColumn">Monthly total</TableCell>
            </TableRow>
        </TableHead>
    )
}
 
Table.ClientRow = ({ client }) => {
    return (
        <TableRow>
            <TableCell className="SocialNetworkTimeFirstColumn">{client.Fullname}</TableCell>
            {
                client.minutesOfDays.map((minutes, index) => <TableCell key={index}>{mapTimeHoursMinToString(minutes)}</TableCell>)
            }
            <TableCell className="SocialNetworkTimeLastColumn">{mapTimeHoursMinToString(client.totalMinutes)}</TableCell>
        </TableRow>
    )
}

export const SocialNetworkTimeTable = ({ clients }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <Table.Head />
                <TableBody>
                    {
                        clients.map(client => <Table.ClientRow key={client.id} client={client} />)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}