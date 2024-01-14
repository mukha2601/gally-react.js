/* eslint-disable react/prop-types */
export default function Modal({ setModal, item }) {
   document.body.style.overflow = "hidden"

   document.addEventListener('click', (e) => {
      if (e.target.classList[0] == 'modal-wrapper') {
         setModal(false)
      }
   })

   return (
      <div className="w-full h-screen fixed left-0 top-0 border-y-gray-400 bg-opacity-40 backdrop-blur-md px-3">
         <div className="modal-wrapper w-full h-full flex justify-center m-auto items-center">
            <div className="w-auto  h-[90%] max-h-[92%] bg-transparent relative flex items-center" >
               <button className='w-10 h-10 absolute top-[.5rem] right-[.5rem] bg-black text-white' onClick={() => setModal(false)}>x</button>
               <img src={item.urls.regular} alt={item.alt_description} className="max-h-full" />
            </div>
         </div>
      </div>
   );
}



