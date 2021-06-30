import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'
import NotFound from './NotFound'
import Videos from '../components/Videos'
import { addWatchList } from '../store/actions/favoriteAction'

function DetailMovies() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { id } = useParams()
    const [movies, loading, error] = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US`)
    const [videos] = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US`)
    const watchList = useSelector(state => state.watchList)
    const [showVideos, setShowVideos] = useState(false)
    console.log(watchList, 'ini watchList data');

    const handleFavorite = (input) => {
        // console.log(input, 'berhasil data nya');
        let count = 0
        watchList.forEach(el => {
            // console.log(favorites, 'INI DARI FAVORITE');
            if(+el.id === +input.id) {
                count++
            }
        })
        if(count === 0 && input.length !== 0) {
            dispatch(addWatchList(input))
            history.push(`/favorite`);
        }else {
            <h1>Tidak dapat menambahkan favorit</h1>
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
            <div className="card" style={{ maxwidth: '540px', borderRadius: '5px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Placeholder"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-6xl">{movies.title}</h5>
                        <label className="text-xl">overview</label>
                        <p className="card-text text-lg">{movies.overview}</p>
                        <div className="flex justify-between mt-5">
                            <div className="col-2">
                                <label className="text-xl">Popularity</label>
                                <p className="card-text"><small className="text-lg">👨‍🦱👩‍🦰{movies.popularity}</small></p>
                            </div>
                            <div className="col-2">
                                <label className="text-xl">Rating</label>
                                <p className="card-text"><small className="text-lg">{movies.vote_average}⭐️</small></p>
                            </div>
                            <div className="col-2">
                                <label className="text-xl">Release</label>
                                <p className="card-text"><small className="text-lg">🎬{movies.release_date}</small></p>
                            </div>
                            <div className="col-2">
                                <label className="text-xl">Budget</label>
                                <p className="card-text"><small className="text-lg">💰${movies.budget}</small></p>
                            </div>
                            <div className="col-2">
                                <label className="text-xl">Vote</label>
                                <p className="card-text"><small className="text-lg">✍️{movies.vote_count}</small></p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="buttonFav">
                        <div onClick={() => handleFavorite(movies)} className="buttonFavorite">
                            <svg xmlns="http://www.w3.org/2000/svg"  title="Favorite" class="svg h-10 w-10 ml-5 text-red-500 hover:text-red-800 transform hover:scale-110 hover:flex-grow cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => setShowVideos(true)} className="ml-32 mt-4 cursor-pointer hover:text-red-500">
                        <span> ▶️ Play Trailer</span>
                    </div>
                    <div className="mt-5">
                   {
                       showVideos ? (
                           <>
                         <Videos video={videos.results[0]} />
                         </>
                       ) : null
                   }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMovies


{/* <section className="flex md:flex-row items-center">
				<div className="hidden lg:block flex-col w-1/2" style={{ height: '30vh' }}>
					<img
						src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
						alt=""
						className="w-full object-cover"
					/>
				</div>
                <div className="">
                    <h1 className="text-blue-600 text-5xl text-center pl-80">{movies.title}</h1>
                    <p className="">description:</p>
                    <span>rating</span>
                    <span>popularity</span>

                </div>
			</section> */}