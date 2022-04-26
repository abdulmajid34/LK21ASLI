import React from 'react'

function Loading() {
  return (
    // <div>
    //   <div class="lds-ring">
    //     <div>
    //     </div>
        
    //     <div>
    //     </div>
        
    //     <div>
    //     </div>
        
    //     <div>
    //     </div>
    //   </div>
    // </div>
    // <div class="spinner">
    //   <span>L</span>
    //   <span>O</span>
    //   <span>A</span>
    //   <span>D</span>
    //   <span>I</span>
    //   <span>N</span>
    //   <span>G</span>
    // </div>
    <>
      <div className='holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        <div className=' animate-pulse each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 static cursor-pointer'>
          
        </div>
      </div>
    </>
  )
}

export default Loading