import { useState, useEffect } from 'react';
import Modal from './Modal';

const accesKey = "coqmge2ykQgYjS7v1EqICeFAOZNxpAFi6x34bOOms4g";
const random_url = `https://api.unsplash.com/photos/random?count=28&client_id=${accesKey}`;

export default function Home() {
   const [data, setData] = useState([]);
   const [modal, setModal] = useState(false);
   const [item, setItem] = useState([]);
   document.body.style.overflow = "initial"

   useEffect(() => {
      fetch(random_url)
         .then((res) => res.json())
         .then((data) => {
            setData(data);
         })
         .catch(() => alert("Xatolik yuz berdi!"));
   }, []);

   const toggleModal = (value) => {
      setItem(value)
      setModal(!modal)
   };


   return (
      <>
         <div className="w-full h-auto  grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] auto-rows-[15rem]">
            {data.map((item) => (
               <img key={item.id} src={item.urls.small_s3} alt={item.alt_description} className='w-full h-full object-cover cursor-pointer' onClick={() => toggleModal(item)} />
            ))}
         </div>
         {modal && (<Modal setModal={setModal} item={item} />)}
      </>
   )
}