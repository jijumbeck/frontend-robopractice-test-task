import { useEffect } from "react"
import { getSNTimeOfWorkers } from "../model/snTimeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { getClientTimeForMonth } from "../helpers/mapClientObject";


const days = Array(31).fill(0).map((elem, index) => index + 1);

Table.Head = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>User</TableCell>
                {
                    days.map(day => <TableCell key={day}>{day}</TableCell>)
                }
            </TableRow>
        </TableHead>
    )
}

Table.ClientRow = ({ client }) => {
    return (
        <TableRow>
            <TableCell>{client.Fullname}</TableCell>
            {
                client.days.map((day,index) => <TableCell key={index}>{day}</TableCell>)
            }
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
                        clients.map(client => <Table.ClientRow key={client.id} client={getClientTimeForMonth(client)} />)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}