import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetch_now_playing } from '../store/actions/actionMovies'
import Loading from './Loading';
import Error from './Error';
import MovieCard from '../components/MovieCard';
// import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import NavbarSecond from '../template/NavbarSecond';
// import Banner from '../components/Banner';


function HomePage() {
  const dispatch = useDispatch();
  const now_playing = useSelector(state => state.movie_now_playing);
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const [page, set_page] = useState(1)

  useEffect(() => {
    console.log(page, 'page home');
    dispatch(fetch_now_playing(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [page])

  function handlePrevPage() {
    if(page === 1) {
      set_page(1)
    } else {
      set_page(page - 1)
    }
  }

  function handleNextPage() {
    set_page(page + 1)
  }

  if(loading) {
    return <Loading />
  }

  if(error) {
    return <Error />
  }

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   arrows: true
  // };

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
        {/* <Slider { ...settings }>
        <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
          {
            now_playing?.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
          }
        {/* </Slider> */}
          {/* {
              now_playing?.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
          } */}
      </div>
      <div className=' flex flex-row justify-center items-center'>
      <button className='prev' onClick={() => handlePrevPage()}>
        Previous
      </button>
      <button className='next' onClick={() => handleNextPage()}>
        Next
      </button>
      </div>
    </>
  )
}

export default HomePage