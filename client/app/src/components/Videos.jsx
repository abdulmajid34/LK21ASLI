import React from 'react'

function Videos({ setShowModal, video }) {
    console.log(video, 'INI DARI VIDEOS');
    return (
        <>
            <div className=" w-screen ansition delay-700 duration-500 ease-in-out transform justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-6/12 my-6 mx-auto">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                       
                        <div class="ratio ratio-16x9 w-full" data-site="Youtube" data-id={video.id} key={video.key}>
                            <iframe
                                src={`https://www.youtube.com/embed/${video.key}`}
                                title="YouTube video"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="flex items-center justify-center px-10 py-2 border-t border-solid border-blueGray-200 rounded-b">
							<button
								className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal()}
							>
								Close
							</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Videos
