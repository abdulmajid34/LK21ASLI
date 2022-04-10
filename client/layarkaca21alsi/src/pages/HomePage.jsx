import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetch_now_playing } from '../store/actions/actionMovies'
import Loading from './Loading';
import Error from './Error';
import MovieCard from '../components/MovieCard';
import NavbarSecond from '../template/NavbarSecond';
import Banner from '../components/Banner';


function HomePage() {
  const dispatch = useDispatch();
  const now_playing = useSelector(state => state.movie_now_playing);
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const [page, set_page] = useState(1)

  useEffect(() => {
    dispatch(fetch_now_playing(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [page])

  if(loading) {
    return <Loading />
  }

  if(error) {
    return <Error />
  }
  return (
    <>
      {/* <NavbarSecond /> */}
      <Navbar />
      {/* <Banner /> */}
      <div className='w-full flex items-center px-10 py-7'>
        <span className=' border-b-2 border-yellow-700'></span>
        <h2 className=' lg:ml-20 text-5xl text-yellow-600'>Now Playing</h2>
      </div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {
              now_playing?.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
          }
      </div>
    </>
  )
}

export default HomePage