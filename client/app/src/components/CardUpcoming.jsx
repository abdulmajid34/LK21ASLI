import React from 'react'

function CardUpcoming(props) {
    return (
        <div>
            <div className="px-5">
                <h3 className=" text-center">{props.movie.title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="gambar" />
            </div>
        </div>
    )
}

export default CardUpcoming
