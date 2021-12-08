import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
// import { useSelector } from 'react-redux'
import axios from 'axios'
import CardList from '../components/CardList'
import NoData from '../assets/noData.png'

function WatchList() {
    const [watchList, setWatchList] = useState([])

    const fetchWatchList = () => {
        return axios({
            method: 'GET',
            url: 'http://localhost:4000/movies/watchList',
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(({ data }) => {
            // console.log(data, 'INI DATA NYA');
            return data
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchWatchList().then(res => {
            setWatchList(res)
        })
    }, [])

    return (
        <div>
            <Navbar />
            {
                watchList.length > 0 ? (
                    <div className="main">
                {
                    watchList?.map((list, idxList) => <CardList key={idxList} list={list} />)
                }
                    </div>
                ) : (
                    <div className=" flex flex-col justify-center items-center self-center text-center w-full mt-40">
                        <img src={NoData} className=" w-1/4" alt="cat" />
                        <h1 className="text-yellow-600 p-2 bg-yellow-200 rounded-xl mt-4">
                            you haven't WatchList
                        </h1>
                        
                    </div>
                )
            }
            
        </div>
    )
}

export default WatchList
