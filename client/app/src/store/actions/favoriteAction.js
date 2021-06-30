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
// export function addWatchList(payload) {
//     return { type: SHOWADDWATCHLIST, payload }
// }
export function deleteWatchList(payload) {
    return { type: SHOWDELETEWATCHLIST, payload }
}

export function newWatchList(data) {
    console.log(data, 'INI ACTION');
    // console.log(data.title, 'INI TITLE');
    // let { title, overview, poster_path, popularity } = data
    return (dispatch) => {
        // dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: `${BASE_URL}/movies/watchList`,
            headers: {
                access_token: localStorage.access_token
            },
            data: {
                title: data.title,
                overview: data.overview,
                poster_path: data.poster_path,
                popularity: data.popularity,
                release_date: data.release_date
            }
        })
        .then((response) => {
            // console.log(response, 'ini dari favorites');
            console.log('yeyeyeyeyeyyeyeyeyeyeyeyey berhasil');
            // dispatch(addWatchList(response))
        })
        .catch((err) => {
            dispatch(setError(err))
        })
        .finally((_) => {
            dispatch(setLoading(false))
        })
    }
}

export function fetchWatchList() {
    return (dispatch) => {
        dispatch(setLoading(true))
        fetch(`${BASE_URL}/movies/watchList`, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data,'INI DARI ACTION NYA');
            dispatch(watchList(data))
        })
        .catch((err) => {
            console.log(err);
            dispatch(setError(err))
        })
        .finally((_) => {
            dispatch(setLoading(false))
        })
    }
}