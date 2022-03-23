import React from 'react'
import {
  Link
} from 'react-router-dom'
import imgLK21ASLI from '../assets/netflixIMG.jpg'
 
function LandingPage() {

  return (
    <div className='container max-w-md xl:max-w-full lg:max-w-5xl md:max-w-3xl bg-no-repeat bg-cover' style={{backgroundImage: `url(${imgLK21ASLI})`}}>
      <div className=' flex flex-col justify-center items-center w-screen h-screen bg-gray-900 bg-opacity-75'>
        <h1 className=' text-white text-7xl py-7 md:text-8xl lg:text-9xl font-extrabold'>LK21ASLI</h1>
        <p className=' text-white text-2xl max-w-xs md:max-w-3xl justify-items-center'>
          <typewritten-text repeat>
          Enjoy Your Watching Favorite Movies
          </typewritten-text>
        </p>
        <Link to='/login'>
        <button className=' mt-14 my-10 bg-red-600 px-5 py-4 rounded-md text-white font-semibold block mx-auto hover:bg-red-500 shadow-sm shadow-black'>
          Watch Now
        </button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage