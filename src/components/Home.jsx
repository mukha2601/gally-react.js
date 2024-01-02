import { useState, useEffect } from 'react';
import Modal from './Modal';

const accesKey = "QaxOLYJFNjV5katlAPBXlpedw2R2Ovti2SKbFZEI4RU";
const random_url = `https://api.unsplash.com/photos/random?count=28&client_id=${accesKey}`;

export default function Home() {
   const [data, setData] = useState([]);
   const [modal, setModal] = useState(false);



   useEffect(() => {
      fetch(random_url)
         .then((res) => res.json())
         .then((data) => {
            setData(data);
         })
         .catch(() => alert("Xatolik yuz berdi!"));
   }, []);

   const toggleModal = ({ item }) => {
      const itemData = item
      console.log(itemData);

      <Modal itemData={itemData} />
      setModal(!modal)
   };


   return (
      <>
         <div className="w-full h-auto  grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] auto-rows-[15rem]">
            {data.map((item) => (
               <img key={item.id} src={item.urls.small_s3} alt={item.alt_description} className='w-full h-full object-cover cursor-pointer' onClick={() => toggleModal({ item })} />
            ))}
         </div>
         {modal && (<Modal closeModal={setModal} />)}
      </>
   )
}