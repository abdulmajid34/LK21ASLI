import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
// import { useSelector } from 'react-redux'
import axios from 'axios'
import CardList from '../components/CardList'
// import useFetch from '../hooks/useFetch'
// import Loading from './Loading';
// import NotFound from './NotFound';

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
            console.log(data, 'INI DATA NYA');
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
    // const [dataWatchList, loading, error] = useFetch(`http://localhost:4000/movies/watchList`)
    // console.log(dataWatchList, 'INI DATA NYA WatchList');
    // const dataWatchList = useSelector(state => state.watchList)
    // console.log(dataWatchList, 'DATA WATCHLIST');

    // if(loading) {
    //     return <Loading />
    // }
    // if(error) {
    //     return <NotFound />
    // }

    return (
        <div>
            <Navbar />
            <div className="main">
                {
                    watchList?.map((list, idxList) => <CardList key={idxList} list={list} />)
                }
            </div>
        </div>
    )
}

export default WatchList
