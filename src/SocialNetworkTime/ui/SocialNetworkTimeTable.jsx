import { useEffect } from "react"
import { getSNTimeOfWorkers } from "../model/snTimeSlice";
import { useDispatch, useSelector } from "react-redux";


export const SocialNetworkTimeTable = ({ clients }) => {
    return (
        <>
            {
                clients.map(client =>
                    <div key={client.id}>
                        <h1>{client.id}</h1>
                    </div>
            )}
        </>
    )
}