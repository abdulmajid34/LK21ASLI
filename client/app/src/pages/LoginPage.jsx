import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div>
            <div class="flex flex-col items-center justify-center BG-IMG h-screen select-none">
                <div class="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-purple-600">
                    <div class="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-purple-600 shadow-2xl p-6 rounded-full text-white">Sign In</div>
                    <div class="mt-10">
                        <form method="POST" autocomplete="">                
                            <div class="relative w-full mb-3">
                                <input type="email" name="email" class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Email" style={{ transition: "all 0.15s ease 0s" }} />
                                
                            </div>
                            <div class="relative w-full mb-3">
                                <input type="password" name="password" class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" style= {{ transition: "all 0.15s ease 0s" }} />
                               
                            </div>
                            <div class="text-center mt-6">
                                <input type="submit" name="signin" id="signin" value="Sign In" class="p-3 rounded-lg bg-purple-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500" />
                            </div>  
                            <hr className="my-6 border-gray-300 w-full" />
                            <p className="mt-8 ml-24">Need an account?
                            <Link to="/register">
                                <p className=" ml-14 -mt-6 text-center text-blue-400 hover:text-blue-600 cursor-pointer">
                                    Register
                                </p>
                            </Link>
                            </p>
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

