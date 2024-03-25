import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Drivers({drivers}) {
  return (
    <div className='mb-10 px-8'>
    <h2 className='font-bold text-xl'>Drivers</h2>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
    gap-7 lg:grid-cols-5 mt-5'>
      {drivers.length>0?drivers.map((drivers,index)=>(
          <div className='border-[1px] rounded-lg cursor-pointer
          hover:scale-110  ease-in-out hover:shadow-md' key={index} >
              <Image src={drivers.attributes?.Photo?.data[0].attributes?.url}
              alt='drivers'
              width={500}
              height={200}
              className='h-[200px] w-full 
              object-cover rounded-lg ' />

              <div className='mt-3 items-baseline flex flex-col gap-1'>
                  <h2 className='text-[10px]
                  bg-white p-1 rounded-full 
                  px-2 text-primary'> {drivers.categories?.data} </h2>
                  <h2 className='font-bold text-[15px]
                  bg-white p-1 rounded-full px-2' >{drivers.attributes?.Name}</h2>
                  <h2 className='text-[20px]
                  bg-white p-1 rounded-full 
                  px-2 text-primary'>{drivers.attributes?.Experience}</h2>
                  <h2 className='text-gray-500 text-sm px-2'>{drivers.attributes?.Phone_Number}</h2>
                <Link href={'/details/'+drivers?.id} className='w-full'>
                        <h2 className='p-2 px-3 border-[1px] 
                         border-primary text-primary rounded-full w-full text-center text-[11px] 
                          cursor-pointer hover:bg-primary hover:text-white  '> Book Now</h2>
                </Link>
              </div>
          </div>
      ))
    :
    //Skeleton Effect
    [1,2,3,4,5,6,7,8].map((item,index)=>(
      <div className='h-[220px] bg-slate-200 
      rounded-lg w-full animate-pulse'>

      </div>

    ))
      
    }
    </div>

    </div>
  
  )
}

export default Drivers
