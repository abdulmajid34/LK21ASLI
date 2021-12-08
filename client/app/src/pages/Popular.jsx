import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMoviesPopular } from '../store/actions/movieAction'
import Loading from '../pages/Loading'
import Navbar from '../components/Navbar'
import MovieCard from '../components/MovieCard'

function Popular() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    // state data movies
    const moviesPopular = useSelector(state => state.moviesPopular)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)

    // render data movies upcoming
    useEffect(() => {
        dispatch(fetchMoviesPopular(page))
    }, [page])

    // handle button pagination
    const nextButton = () => {
        setPage(page + 1)
    }
    const backButton = () => {
        if(page === 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    if(loading) {
        return <Loading />
    }
    if(error) {
        return <p>sedang terjadi masalah</p>
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-row justify-center px-4 py-2"> 
                <h1 className=" text-5xl text-blue-800">Popular</h1>
            </div>
            <div className="main">
                {
                    moviesPopular.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
                }
            </div>
            <div className=" flex flex-row justify-center mt-4">
            <button type="button" onClick={backButton} class="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
                Back
            </button>
            <button type="button" onClick={nextButton} class="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
                Next
            </button>
            </div>
        </div>
    )
}

export default Popular
