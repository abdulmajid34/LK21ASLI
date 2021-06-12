import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
	return (
		<div className="BG-IMG w-screen h-screen">
			<div className="h-full w-full bg-gray-900 bg-opacity-75">
				<div className="h-1/6 flex"></div>
				<div className="h-5/6 flex flex-row justify-center items-center">
					<div className=" -mt-80">
						{/* <img className=" mx-auto w-5/6" src={Logo} alt="LogoCat" /> */}
						<h1 className="text-6xl text-white">LK21ASLI</h1>
						<Link to="/login">
							<button className=" bg-yellow-500 hover:bg-yellow-600 font-bold py-5 ml-16 px-7 rounded-2xl w-32 text-white m-5">
								Let's Go
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
