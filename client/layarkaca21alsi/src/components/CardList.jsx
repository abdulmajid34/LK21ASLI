import React from 'react'

function CardList(props) {
    const handleShowAll = () => {

    }
    const handleDeleteWatchList = () => {
        
    }
    return (
        <>
            <div className='w-80 mt-4 h-5/6 group transition duration-500 ease-in-out hover:scale-110 static'>
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
                </div>
            </div>
        </>
    )
}

export default CardList