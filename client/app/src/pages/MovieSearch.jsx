import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../pages/Loading'
import Navbar from '../components/Navbar'
import MovieCard from '../components/MovieCard'

function MovieSearch() {

    const resultSearch = useSelector(state => state.resultSearch)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)

    if(loading) {
        return <Loading />
    }
    if(error) {
        return <p>sedang terjadi masalah</p>
    }

    return (
        <div>
            <Navbar />
            <div className="main">
                {
                    resultSearch.map((search, idx) => <MovieCard key={idx} movie={search} />)
                }
            </div>
        </div>
    )
}

export default MovieSearch
