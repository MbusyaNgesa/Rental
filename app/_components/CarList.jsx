import Image from 'next/image'
import React from 'react'

function CarList({carList}) {

    if (!carList || carList.length === 0) {
        return <div>No cars available.</div>;
      }

  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl'>Popular Rentals</h2>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 
      gap-7 lg:grid-cols-5'>
        {carList&&carList.map((car,index)=>(
            <div className='border-[1px] rounded-lg' key={index} >
                <Image src={car.attributes?.Image?.data[0].attributes?.url}
                alt='car'
                width={500}
                height={200}
                className='h-[200px] w-full 
                object-cover rounded-lg ' />

                <div>

                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CarList
