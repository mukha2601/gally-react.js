import { useState, useEffect } from 'react';
import Modal from './Modal';

const accesKey = "QaxOLYJFNjV5katlAPBXlpedw2R2Ovti2SKbFZEI4RU";
const random_url = `https://api.unsplash.com/photos/random?count=28&client_id=${accesKey}`;

export default function Home() {
   const [data, setData] = useState([]);
   const [modal, setModal] = useState(false);
   const [item, setItem] = useState([]);

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

   document.body.style.overflow = "initial"

   return (
      <>
         <div className="w-full h-auto  grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] auto-rows-[15rem]" >
            {data.map((item) => (
               <img key={item.id} src={item.urls.small_s3} alt={item.alt_description} className='w-full h-full object-cover cursor-pointer transition duration-700 ease-in-out' onClick={() => toggleModal(item)} />
            ))}
         </div >
         {modal && (<Modal setModal={setModal} item={item} />)
         }
      </>
   )
}