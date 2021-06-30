import React from 'react'

function CardList(props) {
    return (
        <div>
            <div className="movie cursor-pointer group transition duration-500 ease-in-out transform hover:scale-110 hover:flex-grow shadow-xl">
            <img  src={`https://image.tmdb.org/t/p/w300/${props.list.poster_path}`} alt="gambar" />
                <div className="movie-info">
                    <h3>
                        {props.list.title}
                    </h3>
                    <button className=" bg-blue-500">
                        Show Movies
                    </button>
                    <button className="bg-red-600">
                        Delete WatchList
                    </button>
                </div>
        </div>
        </div>
    )
}

export default CardList
