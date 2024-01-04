/* eslint-disable react/prop-types */
// import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Modal({ setModal, item }) {
   document.body.style.overflow = "hidden"

   console.log(item);

   return (
      <div className="w-full h-screen fixed left-0 top-0 border-y-gray-400 bg-opacity-40 backdrop-blur-md overflow-auto">
         <div className="w-full h-full flex justify-center m-auto items-center">
            <div className="w-[500px] h-auto bg-white relative">
               <button className='w-10 h-10 absolute top-0 right-0 bg-black text-white' onClick={() => setModal(false)}>x</button>
               <img src={item.urls.small} alt="" />
            </div>
         </div>
      </div>
   );
}



