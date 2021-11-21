import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import imgLK21 from '../assets/netflixIMG.jpg'

export default function RegisterPage() {
    const history = useHistory()
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: 'http://localhost:4000/register',
            data: {
                username: newUser.username,
                email: newUser.email,
                password: newUser.password
            }
        })
        .then((response) => {
            console.log(response, 'INI DATA REGISTER');
            if(newUser.username === '' || newUser.email === '' || newUser.password === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'please completed your register!',
                })
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Register success!',
                })
                history.push('/login')
            }
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'something wrong!',
            })
        })
    }

    return (
        <div>
            <section className="flex flex-col md:flex-row h-screen items-center">
				<div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
					<img
						src={imgLK21}
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>

				<div
					className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center"
				>
					<div className="w-full h-100">
						<h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
							Register
						</h1>

						<form
							onSubmit={(event) => handleRegister(event)}
							className="mt-6"
							action="#"
							method="POST"
						>
                            <div>
								<label className="block text-gray-700">Username</label>
								<input
									type="text" value={newUser.username} 
                                    onChange={handleChange} 
                                    name="username" 
                                    required 
                                    placeholder="Your Name"
									className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autofocus
									autocomplete
								/>
							</div>
							<div>
								<label className="block text-gray-700 mt-4">Email Address</label>
								<input
									type="email" value={newUser.email} 
                                    onChange={handleChange} 
                                    name="email" 
                                    required 
                                    placeholder="Your Email"
									className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autofocus
									autocomplete
								/>
							</div>

							<div className="mt-4">
								<label className="block text-gray-700">Password</label>
								<input
									type="password" 
                                    name="password" 
                                    value={newUser.password} 
                                    onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									required
                                    placeholder="Your Password"
								/>
							</div>

							<button
								type="submit"
                                onClick={(e) => handleRegister(e)}
								className="w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6"
							>
								Submit
							</button>
						</form>

						<hr className="my-6 border-gray-300 w-full" />
						<p className="mt-8">Need an account?</p>
						<Link to="/login">
							<p className="mt-2 text-blue-400 hover:text-blue-600 cursor-pointer">
								Login
							</p>
						</Link>
						<Link to="/">
							<p className="mt-10 text-gray-400 hover:text-gray-600 cursor-pointer">
								Back to Landing Page
							</p>
						</Link>
					</div>
				</div>
			</section>
        </div>
    )
}
