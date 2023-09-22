import { useEffect } from "react"
import { getSNTimeOfWorkers } from "../model/snTimeSlice";
import { useDispatch, useSelector } from "react-redux";
import { SocialNetworkTimeTable } from "./SocialNetworkTimeTable";
import { SocialNetworkTimePaginationTable } from "./SocialNetworkTimePaginationTable";

export const SocialNetworkTimeWidget = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSNTimeOfWorkers());
    }, []);

    const data = useSelector(store => store.snTimeOfWorkers.clients);

    return(
        <div>
            <SocialNetworkTimePaginationTable getListFunction={() => useSelector(store => store.snTimeOfWorkers.clients)} />
        </div>
    )
}