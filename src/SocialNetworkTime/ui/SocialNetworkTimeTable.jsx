import { useEffect } from "react"
import { getSNTimeOfWorkers } from "../model/snTimeSlice";
import { useDispatch, useSelector } from "react-redux";


export const SocialNetworkTimeTable = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSNTimeOfWorkers());
    }, []);

    const data = useSelector(store => store.snTimeOfWorkers.clients);

    return(
        <div>
            {data.map(client => <div key={client.id}>
                <h1>{client.id}</h1>
            </div>)}
        </div>
    )
}