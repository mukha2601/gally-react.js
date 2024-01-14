import { useState } from 'react'
import Home from './Home';

const accesKey = "QaxOLYJFNjV5katlAPBXlpedw2R2Ovti2SKbFZEI4RU";

export default function Navbar() {

   const [value, setValue] = useState(null)
   const [url, setUrl] = useState(null)
   // const [newData, setNewData] = ([])

   const change = (e) => {
      const newValue = e.target.value
      setValue(newValue)
   }

   const click = () => {
      console.log(url);
      setUrl(`https://api.unsplash.com/search/photos?per_page=28&page=1&query=${value}&client_id=${accesKey}`)
      return <Home setUrl={setUrl} />
   }

   return (
      <div className="w-full h-20 flex items-center justify-center sticky top-0">
         <div className="inbut-box w-[600px] h-14 bg-blue-200 flex ">
            <input type="text" onChange={change} className="flex-1 text-black px-5" placeholder="look for something" />
            <button onClick={click} className="bg-black w-[80px] h-full shrink-0">search</button>
         </div>
      </div>
   )
}
