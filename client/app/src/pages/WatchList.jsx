import React from 'react'
import Navbar from '../components/Navbar'
import useFetch from '../hooks/useFetch'

function WatchList() {
    const [data, loading, error] = useFetch(`http://localhost:3000/movies/watchList`)
    console.log(data, 'INI DATA NYA WatchList');

    return (
        <div>
            <Navbar />
            <h1>Your WatchList movies</h1>
        </div>
    )
}

export default WatchList
