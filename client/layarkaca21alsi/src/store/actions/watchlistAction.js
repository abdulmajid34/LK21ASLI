import {
    // SHOW_WATCHLIST,
    SHOW_ADD_WATCHLIST,
    // SHOW_DELETE_WATCHLIST,
    SHOW_ERROR,
    SHOW_LOADING
} from './actionType.js';

import axios from 'axios';
import Swal from 'sweetalert2'

const BASE_URL = 'http://localhost:8001';

export function loading(payload) {
    return { type: SHOW_LOADING, payload }
}

export function error(payload) {
    return { type: SHOW_ERROR, payload }
}

export function watchlist(payload) {
    return { type: SHOW_ADD_WATCHLIST, payload }
}

export function newWatchlist(data) {
    return (dispatch) => {
        dispatch(loading(true))
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
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'successfully added movies to your watchlist',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch((err) => {
            dispatch(error(err))
            Swal.fire({
                icon: 'error',
                title: err.message,
                showConfirmButton: false,
                timer: 1500
            })
        })
        .finally((_) => {
            dispatch(loading(false))
        })
    }
}
