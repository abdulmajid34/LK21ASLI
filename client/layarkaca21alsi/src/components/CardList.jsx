import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:8001';

function CardList(props) {
    const navigate = useNavigate()
    const handleShowAll = () => {

    }
    const handleDeleteWatchList = (id) => {
        return axios({
            method: "DELETE",
            url: `${BASE_URL}/movies/watchList/${id}`,
            headers: {
                access_token: localStorage.access_token
            },
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
                navigate('/home')
				if (result.isConfirmed) {
					Swal.fire(
						'Deleted!',
						'Your card has been deleted successfully',
						'success'
					)
				}
                return response
			})
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: err.message,
                showConfirmButton: false
            })
            return err
        })
    }
    return (
        <>
            <div className='w-80 mt-4 h-5/6 group transition duration-500 ease-in-out hover:scale-110 relative'>
                <div className=' px-4 w-full h-full'>
                    <img className=' object-cover rounded-2xl' src={`https://image.tmdb.org/t/p/w500/${props.list.poster_path}`} alt="gambar" />
                    <div className=' absolute opacity-0 px-4 group-hover:opacity-100 w-full left-0 right-0 bottom-0 h-2/6 bg-white transition duration-500 bg-opacity-75 rounded-xl'>
                        <div className="w-full h-full flex flex-col justify-start overflow-y-scroll items-start p-4">
                            <div className=' py-2'>
                                <span className=' font-bold'>{props.list.title}</span>
                            </div>
                            <div className=''>
                                <p className=' break-words'>
                                    {props.list.overview}
                                </p>
                            </div>
                            <div className='flex flex-row justify-between items-center mt-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clip-rule="evenodd" />
                                </svg>
                                <span className=''>
                                    {props.list.popularity}
                                </span>
                                <span className='flex flex-row justify-start px-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-1 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                    </svg>
                                    {props.list.release_date}
                                </span>
                            </div>
                            
                        </div>
                    </div>
                        <div className=' absolute right-4 top-3 flex flex-row space-x-2 transition-all duration-100'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white hover:text-red-600 bg-transparent cursor-pointer bg-opacity-70 8ove8:text-red-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                onClick={() => {
                                    handleDeleteWatchList(props.list.id)
                                }}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                        </div>
                </div>
            </div>
        </>
    )
}

export default CardList