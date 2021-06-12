import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from 'react-slick'
import { fetchMoviesUpcoming } from '../store/actions/movieAction'
import CardUpcoming from '../components/CardUpcoming'
import Navbar from '../components/Navbar'

export default function MovieList() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const moviesUpcoming = useSelector(state => state.moviesUpcoming)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)
    console.log(moviesUpcoming, 'INI MOVIE NYA');

    useEffect(() => {
        dispatch(fetchMoviesUpcoming(page))
    }, [page])

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
        return <h1>LOADING...</h1>
    }
    if(error) {
        return <p>sedang terjadi masalah</p>
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-left text-blue-500 text-4xl">Upcoming</h1>
            
            <Slider { ... settings}>
                {
                    moviesUpcoming.map((movie, idx) => <CardUpcoming key={idx} movie={movie} />)
                }
            </Slider>
            <div>
            <button class="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
                Back
            </button>
            <button class="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
                Next
            </button>
            </div>
        </div>
    )
}

