import React from "react";

const RecertificationVideos = () => {
    return(
        <>
 <div className="py-5 px-5  lg:py-20 lg:px-20 "> 
   <div className="flex flex-col items-center">    
   <h2 className='text-4xl text-dark-blue md:text-6xl font-bold mb-5 text-center'>
   Recertification Videos
       </h2>      
       <h5 className="text-black w-full lg:w-3/4 text-xl mb-10  text-center">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
       </h5>
       <div className="gap-10  w-full  md:flex ">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h2 className="text-xl text-dark-blue md:text-2xl font-bold mb-5 ">
            CSHM Blueprint
          </h2>
          <video className="w-full h-full object-cover" 	controls src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"></video>
          
          
      </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
        <h2 className="text-xl text-dark-blue  md:text-2xl font-bold mb-5 ">
            CSHM Blueprint
          </h2>
          <video className="w-full h-full object-cover" 	controls src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"></video>
          
        </div>
      </div>
     </div>
 </div>
        </>
    )
}
export default RecertificationVideos