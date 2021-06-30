import React from 'react'
import Logo from '../assets/404.svg'

export default function NotFound() {
    return (
        <div className="h-screen w-screen bg-yellow-400 flex flex-col justify-center items-center">
			<img src={Logo} className="w-1/6 animate-pulse" alt="" />
		</div>
    )
}

