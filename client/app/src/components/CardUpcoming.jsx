import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function CardUpcoming(props) {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleDetail = (id) => {
        history.push(`/movies/detail/${id}`)
    }

    return (
        <div className=" w-72 group transition duration-500 ease-in-out bg-blue-500 transform hover:scale-110 hover:flex-grow shadow-xl">
            <div className="relative">
                <h3 className=" text-center text-lg m-5">{props.movie.title}</h3>
                <div className="" onClick={() => handleDetail(props.movie.id)}>
                <img src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default CardUpcoming
