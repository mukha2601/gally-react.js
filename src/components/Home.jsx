import { useState, useEffect } from 'react';

const accesKey = "5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk";
const random_url = `https://api.unsplash.com/photos/random?count=28&client_id=${accesKey}`;

export default function Home() {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch(random_url)
         .then((res) => res.json())
         .then((data) => {
            setData(data);
            console.log(data);
         })
         .catch(() => alert("Xatolik yuz berdi!"));
   }, []);

   return (
      <div className="w-full h-auto  grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] auto-rows-[15rem]">
         {data.map((item) => (
            <img key={item.id} src={item.urls.regular} alt={item.alt_description} className='w-full h-full object-cover' />
         ))}
      </div>
   )
}