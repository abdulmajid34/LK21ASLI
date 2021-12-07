import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchMovies } from '../store/actions/movieAction'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'



const Navbar = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()

        dispatch(fetchSearchMovies(search))
        history.push('/movieSearch')
    }
    
    const searchQuery = (e) => {
        setSearch(e.target.value)
    }


    const handleLogout = () => {
        Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Logout'
		  }).then((result) => {
			if (result.isConfirmed) {
				localStorage.clear()
				history.push('/')
			  Swal.fire(
				'Logout!',
				'See You Again!',
				'success'
			  )
			}
		})
    }

    return (
        <div className="relative">
            <nav
            className=" flex items-center justify-between w-screen flex-wrap bg-blue-500 lg:px-12 shadow border-solid border-t-2 border-blue-700">
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <Link to="/movieList">
                        <span className="font-semibold text-xl tracking-tight text-white">LK21ASLI</span>
                    </Link>
                </div>
                <div className="block lg:hidden ">
                    <button
                        id="nav"
                        className="flex items-center px-3 py-2 border-2 rounded text-white border-blue-700 hover:text-blue-700 hover:border-blue-700">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        
            <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div className="text-md font-bold text-white lg:flex-grow">
                    <Link to="/upcoming">
                        <div className="block mt-4 lg:inline-block mb-4 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 hover: cursor-pointer">
                                <span>
                                    Upcoming
                                </span>
                        </div>
                    </Link>
                    <Link to="/popular">
                        <div className="block mt-4 lg:inline-block mb-4 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 hover: cursor-pointer">
                            <span>Popular</span>
                        </div>
                    </Link>
                    <Link to="/topRated">
                        <div className="block mt-4 lg:inline-block mb-4 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 hover: cursor-pointer">
                            <span>Top Rating</span>
                        </div>
                    </Link>
                    
                    <Link to="/watchList">
                        <p href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                            WatchList
                        </p>
                    </Link>
                </div>
                <div className="relative mx-auto text-gray-600 lg:block hidden">
                    <form onSubmit={handleSearch}>
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="text" 
                        name="search" 
                        placeholder="Search"  
                        value={search}
                        onChange={searchQuery}
                        />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    </button>
                    </form>
                </div>
                <div className="flex ">
                    <p
                    onClick={handleLogout}
                    className="block text-md px-4 mb-4 ml-2 py-2 rounded text-white font-bold hover:text-white cursor-pointer mt-4 hover:bg-blue-700 lg:mt-0">
                        logout
                    </p>
                </div>
                <div className="flex ">
                    <p
                    className=" block text-md px-4 mb-4 ml-2 py-2 rounded text-white font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                        Hello, {localStorage.username}
                    </p>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;
