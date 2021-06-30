import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function MovieCard(props) {
    // const dispatch = useDispatch()
    const history = useHistory()

    const handleDetail = (id) => {
        history.push(`/movies/detail/${id}`)
    }
    return (
        <div className="movie cursor-pointer group transition duration-500 ease-in-out transform hover:scale-110 hover:flex-grow shadow-xl">
            <img onClick={() => handleDetail(props.movie.id)} src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt="gambar" />
                <div className="movie-info">
                    <h3>
                        {props.movie.title}
                    </h3>
                    <span className="green">
                        {props.movie.vote_average}
                    </span>
                </div>
        </div>
    )
}

export default MovieCard
