import React from 'react'
import { useSelector } from 'react-redux'
import CardSearch from '../components/CardSearch';
import Navbar from '../components/Navbar';
import Error from './Error';
import Loading from './Loading';
import NoDataFound from '../assets/noData.png'

function MovieSearch() {    
    const searchData = useSelector(state => state.searchResult);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    return (
        <>
            <Navbar />
            {
                searchData.length > 0 ? (
                    <div className='flex flex-wrap items-center px-9 py-7'>
                        {
                            searchData?.map((movieData, idxSearch) => <CardSearch key={idxSearch} searchData={movieData} />)
                        }
                    </div>
                ) : (
                    <div className=" flex flex-col justify-center items-center self-center text-center w-full">
                        <img src={NoDataFound} className=" w-1/4 mt-14" alt="cat" />
                        <h1 className="text-yellow-600 p-2 bg-yellow-200 rounded-xl">
                            Search Not Found
                        </h1>
                    </div>
                )
            }
            
        </>
    )
}

export default MovieSearch