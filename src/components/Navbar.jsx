
export default function Navbar() {
   return (
      <div className="w-full h-20 flex items-center justify-center sticky top-0">
         <div className="inbut-box w-[600px] h-14 bg-blue-200 flex ">
            <input type="text" className="flex-1 text-black px-5" />
            <button className="bg-black w-[80px] h-full shrink-0">search</button>
         </div>
      </div>
   )
}
