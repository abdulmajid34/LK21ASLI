import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'
import NotFound from './NotFound'
import Videos from '../components/Videos'
import { newWatchList } from '../store/actions/favoriteAction'
import Swal from 'sweetalert2'

export default function DetailMovies() {
    // const history = useHistory()
    const dispatch = useDispatch()
    const { id } = useParams()
    const [showModal, setShowModal] = useState(false)
    const [movies, loading, error] = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US`)
    const [videos] = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US`)
    const watchList = useSelector(state => state.watchList)
    // const [showVideos, setShowVideos] = useState(false)
    console.log(watchList, 'ini watchList data');
    // console.log(movies, 'INI DATA MOVIES');

    const handleFavorite = (input) => {
        console.log(input, 'berhasil data nya');
        let count = 0
        watchList.forEach(el => {
            // console.log(favorites, 'INI DARI FAVORITE');
            if(+el.id === +input.id) {
                count++
            }
        })
        if(count === 0 && input.length !== 0) {
            dispatch(newWatchList(input))
            // history.push(`/watchList`);
            Swal.fire('Successfully Added Your Movies to WatchList')
        }else {
            Swal.fire('Already In Your WatchList')
        }
        
    }

    if(loading) {
        return <Loading />
    }
    if(error) {
        return <NotFound />
    }

    return (
        <div>
            <Navbar />
            <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">Title</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{movies.title}</h1>
                    <div className="flex mb-4">
                    <span className="flex items-center">
                        <span className="text-gray-600 ml-3">{movies.popularity}</span>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-gray-600 ml-3">Rating Movies</span>
                    </span>
                    
                    </div>
                    <span className=""><strong>Descriptions:</strong></span>
                    <p className="leading-relaxed">{movies.overview}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div className="flex">
                        <span className=" w-7/12">Release Date :</span>
                        <p className="w-7/12">{movies.release_date}</p>
                        <span className="">Production:
                        {
                            movies.production_companies?.map((product, idxProduct) => (
                                <p key={idxProduct} className="px-5">{product.name}</p>
                            ))
                        }
                        </span>
                        <p className=""></p>
                        <span className="mr-3">Genre:
                        {
                            movies.genres?.map((genre, index) => (
                                <p key={index}>
                                    {genre.name}, 
                                </p>
                            ))
                        }
                        </span>
                        
                    </div>
                    </div>
                    <div className="flex">
                        <div className=" text-lg cursor-pointer hover:text-opacity-30 text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                            </svg>
                            <p className=" ml-6 -mt-6" onClick={() => setShowModal(true)}>
                                Play Trailer
                            </p>
                            
                        </div>
                        <button onClick={() => handleFavorite(movies)} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-600 ml-4">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 hover:text-red-700 text-4xl " viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            {
                showModal ? (
                    <Videos 
                        video={videos.results[0]}
                        setShowModal={() => setShowModal(!showModal)}
                    />
                ) : null
            }
            </section>
        </div>
        
    )
}