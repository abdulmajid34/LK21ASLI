import React from 'react'

function Login() {
    return (
        <div>
            <div class="flex flex-col items-center justify-center BG-IMG h-screen select-none">
                <div class="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-purple-600">
                    <div class="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-purple-600 shadow-2xl p-6 rounded-full text-white">Sign In</div>
                    <div class="mt-10">
                        <form method="POST" action="" autocomplete="">                
                            <div class="relative w-full mb-3">
                                <input type="email" name="email" class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Email" style={{ transition: "all 0.15s ease 0s" }} />
                                
                            </div>
                            <div class="relative w-full mb-3">
                                <input type="password" name="password" class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" style={{ transition: "all 0.15s ease 0s"}} />
                                
                            </div>
                            <div class="text-center mt-6">
                                <input type="submit" name="signin" id="signin" value="Sign In" class="p-3 rounded-lg bg-purple-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500" />
                            </div>  
                            <div class="flex flex-wrap mt-6">
                                <div class="w-1/2 text-left">
                                    <a href="#" class="text-blue-900 text-xl"><small>Forgot password?</small></a>
                                </div>
                                <div class="w-1/2 text-right">
                                    <a href="#" class="text-blue-900 text-xl"><small>Sign In</small></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
