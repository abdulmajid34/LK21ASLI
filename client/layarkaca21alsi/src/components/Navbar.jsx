// import React, { useState } from 'react'

// function Navbar() {

//     const [setOpen, setIsOpen] = useState(false);    

//   return (
//     <div className=' w-full top-0 left-0'>
//         <div className=' items-center justify-between md:flex bg-[#e50914] py-4 md:px-10 px-7'>
//             <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
//                 LK21ASLI
//             </div>

//             <div onClick={() => setIsOpen(!setOpen)}  className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
//             <ion-icon style={{color: 'white'}} name={setOpen ? 'close' : 'menu'}></ion-icon>
//             </div>

//             <div onClick={() => setIsOpen(false)} className={ ` ${setOpen ? 'block' : 'hidden'} bg-opacity-50 z-[-1] transition-all duration-1000 ease-in-out fixed w-full h-full top-16 mt-[-5px] left-0`}></div>

//             <ul className={` sm:flex-row md:flex md:items-center md:pb-0 pb-12 md:static lg:bg-none bg-[#e50914] md:z-auto z-[-1] left-0 w-3/6 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${setOpen ? ' left-24 opacity-100' : 'left-[-490px]'} `}>
//                 {/* <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-14 px-8'> */}
//                     <li className=' md:ml-8 text-xl md:my-0 my-7'>
//                         <span className='text-rose-200 hover:text-white duration-500'>
//                             Popular
//                         </span>
//                     </li>
//                     <li className=' md:ml-8 text-xl md:my-0 my-7'>
//                         <span className='text-rose-200 hover:text-white duration-500'>
//                             Latest
//                         </span>
//                     </li>
//                     <li className=' md:ml-8 text-xl md:my-0 my-7'>
//                         <span className='text-rose-200 hover:text-white duration-500'>
//                             Top Rated
//                         </span>
//                     </li>
//                     <li className=' md:ml-8 text-xl md:my-0 my-7'>
//                         <span className='text-rose-200 hover:text-white duration-500'>
//                             Upcoming
//                         </span>
//                     </li>
//                     <li className=' md:ml-8 text-xl md:my-0 my-7'>
//                         <span className='text-rose-200 hover:text-white duration-500 lg:pr-20 pr-0'>
//                             Watchlist
//                         </span>
//                     </li>
//                 {/* </div> */}
                

//                 <div class="relative mx-auto text-gray-600 lg:block hidden">
//                     <input
//                         class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
//                         type="search" name="search" placeholder="Search" />
//                     <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
//                         <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
//                             version="1.1" id="Capa_1" x="0px" y="0px"
//                             viewBox="0 0 56.966 56.966" 
                            
//                             width="512px" height="512px">
//                     <path
//                         d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
//                 </svg>
//                     </button>
//                 </div>

//                 <li className=' md:ml-8 text-xl md:my-0 my-7'>
//                     <span className='text-rose-200 hover:text-white duration-500'>
//                         Developer
//                     </span>
//                 </li>
//                 <li className=' md:ml-8 text-xl md:my-0 my-7 '>
//                     <span className='text-rose-200 hover:text-white duration-500'>
//                         Logout
//                     </span>
//                 </li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react'

function Navbar() {

    const [isOpen, setOpen] = useState(false);
  return (
    <div className=' w-full sticky top-0 left-0'>
        <div className=' md:flex items-center justify-between py-4 px-7 md:px-10 bg-[#e50914]'>
            <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
                LK21ASLI
            </div>

            <div onClick={() => setOpen(!isOpen)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
            <ion-icon style={{color: 'white'}} name={isOpen ? 'close' : 'menu'}></ion-icon>
            </div>

            <div onClick={() => setOpen(false)} className={ ` ${setOpen ? 'block' : 'hidden'} bg-opacity-50 z-[-1] transition-all duration-1000 ease-in-out fixed w-full h-full top-16 mt-[-5px] left-0`}></div>

            <ul className={` md:flex-row md:flex md:items-center md:pb-0 pb-12 absolute md:static lg:bg-none bg-[#e50914] md:z-auto z-[-1] left-0 w-3/6 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'left-0' : 'left-[-490px]'} `}>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <span className='text-rose-200 hover:text-white duration-500'>
                        Popular
                    </span>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <span className='text-rose-200 hover:text-white duration-500'>
                        Latest
                    </span>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <span className='text-rose-200 hover:text-white duration-500'>
                        Top Rated
                    </span>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <span className='text-rose-200 hover:text-white duration-500'>
                        Upcoming
                    </span>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7 lg:mr-36'>
                    <span className='text-rose-200 hover:text-white duration-500'>
                        Watchlist
                    </span>
                </li>

                {/* <div class="relative mx-auto text-gray-600 lg:block">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                            version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966" 
                            
                            width="512px" height="512px">
                            <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg>
                    </button>
                </div> */}

                <div className='relative'>
                    <input type="search" name='search' placeholder='search' className='bg-white h-10 rounded-lg text-sm focus:outline-none md:ml-8 w-11/12 p-2' />
                    <button type='submit' className='absolute right-5 top-0 mt-3 mr-2 lg:right-0'>
                    <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>

                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <span className='text-rose-200 hover:text-white duration-500'>
                        Hai, {localStorage.getItem('username')}
                    </span>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <span className='text-rose-200 hover:text-white duration-500'>
                        Logout
                    </span>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar