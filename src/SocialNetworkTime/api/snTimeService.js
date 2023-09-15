import axios from "axios"

const GET_SN_TIME_ENDPOINT = 'http://localhost:8080/api/users';

export const getSNTimeOfWorkersRequest = async function () {
    return axios.get(GET_SN_TIME_ENDPOINT)
        .then(res => res.data);
}