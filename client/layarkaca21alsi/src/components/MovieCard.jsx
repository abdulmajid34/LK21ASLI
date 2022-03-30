import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { newWatchlist } from '../store/actions/watchlistAction.js'

function MovieCard(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const watchlist = useSelector(state => state.watchlist)

    const redirectMovieDetail = (id) => {
        navigate(`/movies/details/${id}`)
    }

    const addWatchlist = (movies) => {
        // let count = 0;
        // watchlist.forEach(watch => {
        //     if(+watch.id === +movies.id) {
        //         count++
        //     }
        // })
        // if(count === 0 && movies.length !== 0) {
        //     dispatch(newWatchlist(movies))
        // } else {
        //     console.log("gagal add");
        // }
    }


    return (
        <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
            <img onClick={() => redirectMovieDetail(props.movie.id)} className="w-full" src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt="gambar" />
            <div onClick={() => addWatchlist(props.movie)} className="badge absolute top-0 right-0 m-1 text-gray-50 cursor-pointer p-1 px-2 text-xs font-bold rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            </div>
            <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
            <span className="mr-1 p-1 px-2 font-bold">Views: {props.movie.vote_average}</span>
            <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">Like: {props.movie.popularity}</span>
            <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">Rating: {props.movie.vote_count}</span>
            </div>
            <div className="desc p-4 text-gray-800">
            <span className="description text-sm block py-2 border-gray-400 mb-2">{props.movie.title}</span>
            </div>
        </div>
    )
}

export default MovieCard