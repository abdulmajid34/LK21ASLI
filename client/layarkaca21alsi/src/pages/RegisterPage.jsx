import React from 'react'
import imgLK21ASLI from '../assets/netflixIMG.jpg';
import {
  Link,
  useNavigate
} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  useForm
} from 'react-hook-form'

function RegisterPage() {
  const BASE_URL = 'http://localhost:8001'

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  async function handleRegister(user) {
    await axios({
      method: "POST",
      url: `${BASE_URL}/register`,
      data: {
        username: user.username,
        email: user.email,
        password: user.password
      }
    })
    .then(({ data }) => {
      localStorage.setItem("username", data.username)
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      })

        Toast.fire({
            icon: 'success',
            title: 'successfully created your account!',
        })
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: err.message,
        })
        return err.response
      })
  }

  return (
    <div className='flex flex-col md:flex-row-reverse h-screen'>
      <div className='hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen'>
        <div className='w-full h-full object-cover bg-cover' style={{ backgroundImage: `url(${imgLK21ASLI})` }}>
          <div className='w-full h-full bg-gray-900 bg-opacity-75'>
          <h1 className='flex flex-row-reverse justify-start py-4 px-6 text-5xl text-white font-bold'>LK21ASLI</h1>
          <h4 className=' h-4/6 flex flex-col justify-center items-center font-bold text-4xl text-white'>
            <typewritten-text repeat>
              "Watch Your movie favorite"
            </typewritten-text>
          </h4>
          </div>
        </div>
      </div>

      <h1 className='lg:hidden px-5 py-2 text-4xl sm:text-3xl md:text-5xl text-[#e50914]'>LK21ASLI</h1>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className=" text-3xl lg:text-4xl text-center md:text-2xl font-bold leading-tight">
            Sign Up
          </h1>

          <form className='mt-12' onSubmit={handleSubmit(handleRegister)}>
            <div>
              <label className="block text-gray-700 mt-4">
                Username
              </label>
              <input type="text" className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' 
              { ...register("username", { required: true }) }
              />
              { errors.username && <p className=' text-xs text-red-600 mt-1'>The username field is required!</p> }
            </div>

            <div className='mt-4'>
              <label className="block text-gray-700 mt-4">
              Email
              </label>
              <input type="email" className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
              { ...register("email", { required: true }) }
              />
              { errors.email && <p className=' text-xs text-red-600 mt-1'>The Email field is required!</p> }
            </div>
            <div className='mt-4'>
              <label className="block text-gray-700 mt-4">
              Password
              </label>
              <input type="password" className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
              { ...register("password", { required: true }) }
              />
              { errors.password && <p className=' text-xs text-red-600 mt-1'>The Password field is required!</p> }
            </div>

            <button
              type="submit"
              className="
              w-full block bg-[#e50914] hover:bg-red-800 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Submit
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />
            <p className="mt-8">already have an account?</p>

            <Link to='/login'>
              <p className="mt-2 text-blue-400 hover:text-blue-600 cursor-pointer">
                  Sign In
              </p>
            </Link>

            <Link to='/'>
              <p className="mt-10 text-gray-400 hover:text-gray-600 cursor-pointer">
                  Back to Landing Page
              </p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage