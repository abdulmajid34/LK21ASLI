import React from 'react'
import { useNavigate } from 'react-router-dom'
import imageNotAvailable from '../assets/imgNotAvailabel.png';
import { formatDecimal } from '../helpers/formatDecimal'
// import { useSelector, useDispatch } from 'react-redux'
// import { newWatchlist } from '../store/actions/watchlistAction.js'

function MovieCard(props) {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const watchlist = useSelector(state => state.watchlist)

    const redirectMovieDetail = (id) => {        
        navigate(`/movies/details/${id}`)
    }

    


    return (
        <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 static cursor-pointer">
            {
                props.movie.poster_path === null ? (
                    <img onClick={() => redirectMovieDetail(props.movie.id)} className="w-full h-5/6 object-contain rounded-2xl" src={imageNotAvailable} alt="imageNotFound" />      
                ) : (
                    <img onClick={() => redirectMovieDetail(props.movie.id)} className="w-full " src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt="imageNotFound" />       
                )
            }
                 
            <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <div className='flex flex-row items-center px-3 w-24'>
                    <div className=' text-yellow-300'>
                        <ion-icon name="star" size="small"></ion-icon>
                    </div>
                    <span className="mr-1 p-1 px-2 font-bold">
                        {props.movie.vote_average}
                    </span>
                </div>            
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                    <div className='flex flex-row items-center px-3'>
                        <ion-icon style={{ paddingRight: '5px' }} size="small" name="eye-outline"></ion-icon>
                        {formatDecimal(props.movie.popularity)}
                    </div>
                </span>
                
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400 w-24">
                    <div className='flex flex-row items-center px-3'>
                        <ion-icon size="small" style={{ paddingRight: '5px' }} name="thumbs-up-outline"></ion-icon>
                        {formatDecimal(props.movie.vote_count)}
                    </div>
                </span>
            </div>
            <div className="desc p-4 text-gray-800">
            <span className="description text-sm block py-2 font-bold border-gray-400 mb-2">{props.movie.title}</span>
            </div>
        </div>        
    )
}

export default MovieCard