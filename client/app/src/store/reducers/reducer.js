import {
    SHOWMOVIES_NOW_PLAYING,
    SHOWMOVIES_POPULAR,
    SHOWMOVIES_TOP_RATED,
    SHOWMOVIES_UPCOMING,
    SHOWLOADING,
    SHOWERROR,
    SHOWWATCHLIST,
    SHOWADDWATCHLIST
} from '../actions/actionType'

const initialState = {
    moviesUpcoming: [],
    moviesPopular: [],
    moviesTop_rated: [],
    moviesNow_playing: [],
    resultSearch: [],
    watchList: [],
    loading: false,
    error: null
}

function reducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case 'searchResult/setSearch':
            return { ...state, resultSearch: payload }
        case SHOWMOVIES_NOW_PLAYING:
            return { ...state, moviesNow_playing: payload }
        case SHOWMOVIES_POPULAR:
            return { ...state, moviesPopular: payload }
        case SHOWMOVIES_TOP_RATED:
            return { ...state, moviesTop_rated: payload }
        case SHOWMOVIES_UPCOMING:
            return { ...state, moviesUpcoming: payload }
        case SHOWWATCHLIST:
            return { ...state, watchList: payload }
        case SHOWADDWATCHLIST:
            return { ...state, watchList: state.watchList.concat(payload) }
        default:
        return state
    }
}

export default reducer