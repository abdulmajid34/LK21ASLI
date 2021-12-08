import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function LoginPage() {
    const history = useHistory()

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: 'http://localhost:4000/login',
            data: {
                email: login.email,
                password: login.password
            }
        })
        .then((response) => {
            console.log(response, 'INI DATA NYA');
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('username', response.data.username)
            history.push(`/movieList`)
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
                title: 'Login success!',
            })
        })
        .catch((err) => {
            console.log(`err`, err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        })
    }

    return (
        <div>
            <div class="flex flex-col items-center justify-center BG-IMG h-screen select-none">
                <div class="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-yellow-500">
                    <div class="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-yellow-500 shadow-2xl p-6 rounded-full text-white">Sign In</div>
                    <div class="mt-10">
                        <form method="POST" onSubmit={(e) => handleSubmit(e)}>                
                            <div class="relative w-full mb-3">
                                <input type="email" name="email" value={login.email} onChange={handleChange} required class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Email" style={{ transition: "all 0.15s ease 0s" }} />
                                
                            </div>
                            <div class="relative w-full mb-3">
                                <input type="password" name="password" value={login.password} onChange={handleChange} required class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" style= {{ transition: "all 0.15s ease 0s" }} />
                            </div>
                            <div class="text-center mt-6">
                                <button type="submit" name="signin" id="signin" value="Sign In" class="p-3 rounded-lg bg-yellow-500 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-yellow-400">
                                    Sign In    
                                </button>
                            </div>  
                            <hr className="my-6 border-gray-300 w-full" />
                            <Link to="/register">
                            <p className="mt-8 ml-24">Need an account?
                                <p className=" ml-14 -mt-6 text-center text-blue-400 hover:text-blue-600 cursor-pointer">
                                    Register
                                </p>
                            </p>
                            </Link>
                            <Link to="/">
                                <p className=" mt-10 text-center text-gray-400 hover:text-gray-600 cursor-pointer">
                                    Back to Landing Page
                                </p>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

