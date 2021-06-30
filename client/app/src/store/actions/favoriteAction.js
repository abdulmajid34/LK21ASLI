import {
    SHOWWATCHLIST,
    SHOWADDWATCHLIST,
    SHOWLOADING,
    SHOWERROR,
    SHOWDELETEWATCHLIST
} from './actionType'
import axios from 'axios'

const BASE_URL = `http://localhost:4000`

export function setLoading(payload) {
    return { type: SHOWLOADING, payload }
}
export function setError(payload) {
    return { type: SHOWERROR, payload }
}
export function watchList(payload) {
    return { type: SHOWWATCHLIST, payload }
}
export function addWatchList(payload) {
    return { type: SHOWADDWATCHLIST, payload }
}
export function deleteWatchList(payload) {
    return { type: SHOWDELETEWATCHLIST, payload }
}

export default function fetchAddWatchList(data) {
    return (dispatch, getState) => {
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: `${BASE_URL}/movies/watchList`,
            headers: {
                access_token: localStorage.access_token
            },
            data: data
        })
        .then((response) => {
            console.log(response, 'ini dari favorites');
        })
        .catch((err) => {
            dispatch(setError(err))
        })
        .finally((_) => {
            dispatch(setLoading(false))
        })
    }
}