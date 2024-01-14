/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export default function Grid({ data, toggleModal }) {
   return (
      <div className="w-full h-auto  grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] auto-rows-[15rem]" >
         {data.map((item) => (
            <img key={item.id} src={item.urls.small_s3} alt={item.alt_description} className='w-full h-full object-cover cursor-pointer transition duration-700 ease-in-out' onClick={() => toggleModal(item)} />
         ))}
      </div >
   )
}
