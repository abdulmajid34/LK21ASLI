import {
    SHOWMOVIES_NOW_PLAYING,
    SHOWMOVIES_POPULAR,
    SHOWMOVIES_TOP_RATED,
    SHOWMOVIES_UPCOMING,
    SHOWLOADING,
    SHOWERROR
} from './actionType'
// import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export function upcoming(payload) {
    return { type: SHOWMOVIES_UPCOMING, payload: payload }
}
export function popular(payload) {
    return { type: SHOWMOVIES_POPULAR, payload: payload }
}
export function now_playing(payload) {
    return { type: SHOWMOVIES_NOW_PLAYING, payload: payload }
}
export function top_rated(payload) {
    return { type: SHOWMOVIES_TOP_RATED, payload: payload }
}
export function setLoading(payload) {
    return { type: SHOWLOADING, payload: payload }
}
export function setError(payload) {
    return { type: SHOWERROR, payload: payload }
}

export function fetchMoviesUpcoming(page) {
    return (dispatch) => {
        dispatch(setLoading(true))
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(upcoming(data.results))
        })
        .catch((err) => {
            dispatch(setError(err))
        })
        .finally((_) => {
            dispatch(setLoading(false))
        })
    }
}