import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import CardList from '../components/CardList'

function Watchlist() {
    const [watchlist, setWatchlist] = useState([])

    const fetchWatchlist = () => {
        return axios({
            method: 'GET',
            url: 'http://localhost:4000/movies/watchList',
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
            <div className='flex flex-wrap items-center px-9 py-7'>
            {/* <div className='holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'> */}
                {
                    watchlist?.map((list, idx) => <CardList key={idx} list={list} />)
                }
            </div>
        </div>
    )
}

export default Watchlist