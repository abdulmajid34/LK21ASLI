import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import CardList from '../components/CardList'
import NoDataFound from '../assets/noData.png'

function Watchlist() {
    const [watchlist, setWatchlist] = useState([])

    const fetchWatchlist = () => {
        return axios({
            method: 'GET',
            url: 'http://localhost:8001/movies/watchList',
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(({ data }) => {
            console.log(data, 'test data');
            return data
        })
        .catch((err) => {
            return err
        })
    }

    useEffect(() => {
        fetchWatchlist().then(res => {
            setWatchlist(res)
        })
    }, [])
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