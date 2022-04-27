import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import CardList from '../components/CardList'
import NoDataFound from '../assets/noData.png'
import Loading from './Loading'
import Error from './Error'

function Watchlist() {
    const [watchlist, setWatchlist] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)    

    const fetchWatchlist = () => {
        setLoading(true)
        return axios({
            method: 'GET',
            url: 'http://localhost:8001/movies/watchList',
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(({ data }) => {            
            return data
        })
        .catch((err) => {
            setError(err)
            return err
        })
        .finally((_) => {
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchWatchlist().then(res => {
            setWatchlist(res)
        })
    }, [])

    if(loading) {        
        return <Loading />
    }
    if(error) {
        return <Error />
    }
    return (
        <div>
            <Navbar />
            {
                watchlist.length > 0 ? (
                    <div className='flex flex-wrap items-center px-9 py-7'>
                    {
                        watchlist?.map((list, idx) => <CardList key={idx} list={list} />)
                    }
                    </div>
                ) : (
                    <div className=" flex flex-col justify-center items-center self-center text-center w-full">
                        <img src={NoDataFound} className=" w-1/4 mt-14" alt="cat" />
                        <h1 className="text-yellow-600 p-2 bg-yellow-200 rounded-xl">
                            you haven't movies in your watchlist
                        </h1>
                    </div>
                )
            }   
            
        </div>
    )
}

export default Watchlist