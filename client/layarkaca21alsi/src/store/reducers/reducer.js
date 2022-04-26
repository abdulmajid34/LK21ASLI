import {
    SHOW_MOVIE_NOW_PLAYING,
    SHOW_MOVIE_POPULAR,
    SHOW_MOVIE_UPCOMING,
    SHOW_MOVIE_TOP_RATED,
    SEARCH_MOVIES,
    SHOW_ADD_WATCHLIST,
    CHAT_COMMENT,
    SHOW_LOADING,
    SHOW_ERROR
} from '../actions/actionType'

const initialState = {
    movie_now_playing: [],
    movie_popular: [],
    movie_upcoming: [],
    movie_top_rated: [],
    searchResult: [],
    watchlist: [],
    chatComment: [],
    error: null,
    loading: false
}

function reducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case SEARCH_MOVIES:
            return { ...state, searchResult: payload }
        case CHAT_COMMENT:
            return { ...state, chatComment: payload }
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
        case SHOW_LOADING:
            return { ...state, loading: payload }
        case SHOW_ERROR:
            return { ...state, error: payload }
        default:
            return state
    }
}

export default reducer