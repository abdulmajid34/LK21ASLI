import React from 'react'

function CardList(props) {
    const handleShowAll = () => {

    }
    const handleDeleteWatchList = () => {
        
    }
    return (
        <div>
            <div className="movie cursor-pointer group transition duration-500 ease-in-out transform hover:scale-110 hover:flex-grow shadow-xl">
            <img src={`https://image.tmdb.org/t/p/w300/${props.list.poster_path}`} alt="gambar" />
                <div className="movie-info">
                    <div className=" border-2 bg-green-600 hover:text-white rounded-lg px-4 py-2">
                        <button className="" onClick={() => handleShowAll()}>
                            Show All
                        </button>
                    </div>
                    <div className=" border-2 bg-red-600 hover:text-white rounded-lg px-4 py-2">
                        <button className="" onClick={() => handleDeleteWatchList(props.list.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardList