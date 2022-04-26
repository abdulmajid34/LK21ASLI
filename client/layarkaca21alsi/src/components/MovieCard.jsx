import React from 'react'
import { useNavigate } from 'react-router-dom'
import imageNotAvailable from '../assets/imgNotAvailabel.png'
// import { useSelector, useDispatch } from 'react-redux'
// import { newWatchlist } from '../store/actions/watchlistAction.js'

function MovieCard(props) {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const watchlist = useSelector(state => state.watchlist)

    const redirectMovieDetail = (id) => {
        console.log(id);
        navigate(`/movies/details/${id}`)
    }

    


    return (
        <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 static cursor-pointer">
            {
                props.movie.poster_path === null ? (
                    <img onClick={() => redirectMovieDetail(props.movie.id)} className="w-full h-5/6 object-contain" src={imageNotAvailable} alt="imageNotFound" />      
                ) : (
                    <img onClick={() => redirectMovieDetail(props.movie.id)} className="w-full " src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt="imageNotFound" />       
                )
            }
                 
            <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
            <span className="mr-1 p-1 px-2 font-bold">Views: {props.movie.vote_average}</span>
            <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">Like: {props.movie.popularity}</span>
            <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">Rating: {props.movie.vote_count}</span>
            </div>
            <div className="desc p-4 text-gray-800">
            <span className="description text-sm block py-2 font-bold border-gray-400 mb-2">{props.movie.title}</span>
            </div>
        </div>        
    )
}

export default MovieCard