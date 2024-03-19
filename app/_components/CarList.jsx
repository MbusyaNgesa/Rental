import Image from 'next/image'
import React from 'react'

function CarList({carList}) {

    if (!carList || carList.length === 0) {
        return <div>No cars available.</div>;
      }

  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl'>Popular Rentals</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
      gap-7 lg:grid-cols-5 mt-5'>
        {carList&&carList.map((car,index)=>(
            <div className='border-[1px] rounded-lg cursor-pointer
            hover:scale-110  ease-in-out hover:shadow-md' key={index} >
                <Image src={car.attributes?.Image?.data[0].attributes?.url}
                alt='car'
                width={500}
                height={200}
                className='h-[200px] w-full 
                object-cover rounded-lg ' />

                <div className='mt-3 items-baseline flex flex-col gap-1'>
                    <h2 className='text-[10px]
                    bg-white p-1 rounded-full 
                    px-2 text-primary'> {car.categories?.data[0].attributes?.Name} </h2>
                    <h2 className='font-bold text-[15px]
                    bg-white p-1 rounded-full px-2' >{car.attributes?.Name}</h2>
                
                <h2 className='p-2 px-3 border-[1px] 
                border-primary text-primary rounded-full w-full text-center text-[11px] 
                cursor-pointer hover:bg-primary hover:text-white  '> Book Now</h2>
                
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CarList
