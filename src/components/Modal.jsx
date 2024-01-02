import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Modal({ closeModal, itemData }) {
   const [data] = useState([itemData]);
   console.log(data);

   return (
      <div className="w-full h-screen fixed  top-0 bg-slate-200 place-items-center justify-items-center">
         <div className="w-[500px] h-[500px] bg-white    ">
            <button className='w-10 h-10 bg-red-200 text-black' onClick={() => closeModal(false)}>x</button>
            <p className='text-black flex items-center justify-center'>Lorem ipsum dolor sit amet consectetur, adipi</p>
         </div>
      </div>
   );
}



