import React from 'react'
import { useHistory } from 'react-router'
// import { useDispatch } from 'react-redux'
// import { deleteWatchList } from '../store/actions/favoriteAction'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function CardList(props) {
    const history = useHistory()
    // const dispatch = useDispatch()

    const handleShowAll = () => {
        history.push('/movieList')
    }

    const handleDeleteWatchList = (id) => {
        // console.log(id, 'BERHASIL DI DELETE');
        // dispatch(deleteWatchList(id))
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


