import { 
    SHOW_ERROR, 
    SHOW_LOADING, 
    SHOW_MOVIE_NOW_PLAYING, 
    SHOW_MOVIE_POPULAR,
    SHOW_MOVIE_TOP_RATED,
    SHOW_MOVIE_UPCOMING,
    SEARCH_MOVIES
} from "./actionType";
import axios from 'axios'

export function now_playing(payload) {
    return { type: SHOW_MOVIE_NOW_PLAYING, payload }
}

export function popular(payload) {
    return { type: SHOW_MOVIE_POPULAR, payload }
}

export function upcoming(payload) {
    return { type: SHOW_MOVIE_UPCOMING, payload }
}

export function topRated(payload) {
    return { type: SHOW_MOVIE_TOP_RATED, payload }
}

export function searchMovies(payload) {
    return { type: SEARCH_MOVIES, payload }
}

export function loading(payload) {
    return { type: SHOW_LOADING, payload }
}

export function error(payload) {
    return { type: SHOW_ERROR, payload }
}
 
export function fetchSearchMovies(search) {
    return (dispatch) => {
        dispatch(loading(true))
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US&query=${search}&page=1&include_adult=false`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(searchMovies(data.results))
        })
        .catch((err) => {
            dispatch(error(err))
        })
        .finally((_) => {
            dispatch(loading(false))
        })
    }
}

export function fetch_now_playing(page) {
    return (dispatch) => {
        dispatch(loading(true))
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(now_playing(data.results))
        })
        .catch((err) => {
            dispatch(error(err))
        })
        .finally((_) => {
            dispatch(loading(false))
        })
    }
}


export function fetch_popular(page) {
    return (dispatch) => {
        dispatch(loading(true))
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(popular(data.results))
        })
        .catch((err) => {
            dispatch(error(err))
        })
        .finally((_) => {
            dispatch(loading(false))
        })
    }
}

export function fetch_upcoming(page) {
    return (dispatch) => {
        dispatch(loading(true))
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(upcoming(data.results))
        })
        .catch((err) => {
            dispatch(error(err))
        })
        .finally((_) => {
            dispatch(loading(false))
        })
    }
}

export function fetch_top_rated(page) {
    return (dispatch) => {
        dispatch(loading(true))
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(topRated(data.results))
        })
        .catch((err) => {
            dispatch(error(err))
        })
        .finally((_) => {
            dispatch(loading(false))
        })
    }
}