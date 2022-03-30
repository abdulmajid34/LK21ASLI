import {
    SHOW_MOVIE_NOW_PLAYING,
    SHOW_MOVIE_POPULAR,
    SHOW_MOVIE_UPCOMING,
    SHOW_MOVIE_TOP_RATED,
    SEARCH_MOVIES,
    SHOW_ADD_WATCHLIST
} from '../actions/actionType'

const initialState = {
    movie_now_playing: [],
    movie_popular: [],
    movie_upcoming: [],
    movie_top_rated: [],
    searchResult: [],
    watchlist: []
}

function reducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case SEARCH_MOVIES:
            return { ...state, searchResult: payload }
        case SHOW_MOVIE_NOW_PLAYING:
            return { ...state, movie_now_playing: payload }
        case SHOW_MOVIE_POPULAR:
            return { ...state, movie_popular: payload }
        case SHOW_MOVIE_UPCOMING:
            return { ...state, movie_upcoming: payload }
        case SHOW_MOVIE_TOP_RATED:
            return { ...state, movie_top_rated: payload }
        case SHOW_ADD_WATCHLIST:
            return { ...state, watchlist: state.watchlist.concat(payload)}
        default:
            return state
    }
}

export default reducer