import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Error from './Error';
import Comments from '../components/Comments';
import { useSelector, useDispatch } from 'react-redux';
import { newWatchlist } from '../store/actions/watchlistAction';
import Videos from '../components/Videos';

function MovieDetail() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const [showComment, setComment] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [detailMovies, loading, error] = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US`)
    const [videos] = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US`)
    const watchlist = useSelector(state => state.watchlist)

    if(loading) {
        return <Loading />
    }
    if(error) {
        return <Error />
    }

    const addWatchlist = (movies) => {
        let count = 0;
        watchlist.forEach(watch => {
            if(+watch.id === +movies.id) {
                count++
            }
        })
        if(count === 0 && movies.length !== 0) {
            dispatch(newWatchlist(movies))
        } else {
            console.log("gagal add");
        }
    }

    return (
        <div>
            <Navbar />
            <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`https://image.tmdb.org/t/p/w500/${detailMovies.poster_path}`} />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">FILM</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{detailMovies.title}</h1>
                        <div class="flex mb-4">
                        <span class="flex items-center">
                            {detailMovies.popularity}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-gray-600 ml-3">Viewer</span>
                        </span>
                        <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200'>
                            {detailMovies.release_date}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                            </svg>
                            Release date
                        </span>
                        <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200'>
                            {detailMovies.vote_count}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-600  mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Rating
                        </span>
                        </div>
                        <p class="leading-relaxed mb-2
                        ">{detailMovies.overview}</p>
                        <div class="flex mt-6">
                            {/* <button class="flex ml-auto text-white bg-red-500 border-0 py-4 px-6 focus:outline-none hover:bg-red-600 rounded">Trailer  */}
                            <button onClick={() => setShowModal(true)} className='button flex mr-8'>Trailer
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                            </svg> */}
                            </button>

                            <button onClick={() => setComment(!showComment)} class="btn-comment mt-4">
                                <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class=" svg-comment text-red-600" viewBox="0 0 20 20" fill="currentColor" height="16" width="16" >
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                </svg>
                                </div>
                                <p>Comment</p>
                            </button>

                            {/* <span onClick={() => setComment(!showComment)} class="flex ml-4 py-2 px-6 focus:outline-none cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-1 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                                <p className='text-grey text-md py-1' >Comments</p>
                            </span> */}

                            {/* <span onClick={() => addWatchlist(detailMovies)} class="flex py-2 px-6 focus:outline-none cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <p className='px-2'>Add Watchlist</p>
                            </span> */}

                            <button onClick={() => addWatchlist(detailMovies)} class="cssbuttons-io-button">Add Watchlist
                                <div class="icons">
                                    <svg className='svg-love' height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    </div>
                    {
                        showComment ? (
                            <Comments />
                        ) : null
                    }
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

export default MovieDetail