import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function CardList(props) {
    const history = useHistory()
    // const dispatch = useDispatch()

    const handleShowAll = () => {
        history.push('/movieList')
    }

    const handleDeleteWatchList = (id) => {
        return axios({
            method: 'DELETE',
            url: `http://localhost:4000/movies/watchList/${id}`,
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then((response) => {
            Swal.fire({
				title: 'Are you sure?',
				text: 'You will not be able to return this Movies!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'delete',
			}).then((result) => {
                history.push('/movieList')
				if (result.isConfirmed) {
					Swal.fire(
						'Deleted!',
						'Your card has been deleted successfully',
						'success'
					)
				}
			})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            
            <div className="movie cursor-pointer group transition duration-500 ease-in-out transform hover:scale-110 hover:flex-grow shadow-xl">
            <img src={`https://image.tmdb.org/t/p/w300/${props.list.poster_path}`} alt="gambar" />
                <div className="movie-info">
                    <h3>
                        {props.list.title}
                    </h3>
                    <div className="">
                        <span className="green">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                            {props.list.popularity}
                        </span>
                    </div>
                </div>
                <div className="movie-info">
                    <div className=" border-2 bg-green-600 hover:text-white rounded-lg px-4 py-2">
                        <button className="" onClick={() => handleShowAll()}>
                            Show All
                        </button>
                    </div>
                    <div className=" border-2 bg-red-600 hover:text-white rounded-lg px-4 py-2">
                        <button className="" onClick={() => handleDeleteWatchList(props.list.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


