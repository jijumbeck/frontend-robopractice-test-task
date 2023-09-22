import { useEffect } from "react"
import { getSNTimeOfWorkers } from "../model/snTimeSlice";
import { useDispatch, useSelector } from "react-redux";
import { SocialNetworkTimePaginationTable } from "./SocialNetworkTimePaginationTable";
import { ClientSearchInput } from "./SearchInput";
import './SNTWidget.css';

export const SocialNetworkTimeWidget = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSNTimeOfWorkers());
    }, []);

    return (
        <div>
            <div className="Header">
                <ClientSearchInput />
            </div>
            <SocialNetworkTimePaginationTable getListFunction={() => {
                const searchFilter = useSelector(state => state.snTimeOfWorkers.searchFilter);
                return useSelector(store => {
                    if (searchFilter === '') {
                        return store.snTimeOfWorkers.clients;
                    }
                    return store.snTimeOfWorkers.clients.filter(client => client.Fullname.includes(searchFilter));
                });

            }} />
        </div>
    )
}