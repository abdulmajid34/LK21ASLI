import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import Slider from 'react-slick'
import { fetchMoviesUpcoming } from '../store/actions/movieAction'
import CardUpcoming from '../components/CardUpcoming'
import Loading from '../pages/Loading'
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
        return <Loading />
    }
    if(error) {
        return <p>sedang terjadi masalah</p>
    }

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     arrows: true
    // };

    return (
        <div>
            <Navbar />
            <h1 className=" flex flex-col items-start justify-start pt-10 pl-12 pb-2 text-left text-blue-500 text-4xl">Upcoming</h1>
            <div className="w-full h-full bg-white flex px-5">
                <div className="flex overflow-y-hidden h-full">
                    <div className="flex flex-nowrap items-center space-x-6">
                {   
                    moviesUpcoming.map((movie, idx) => <CardUpcoming key={idx} movie={movie} />)
                }
                    </div>
                </div>
            </div>
            {/* </Slider> */}
            <div className=" flex flex-row justify-center mt-10">
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

