import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment'

function DriverDetail({drivers}) {
  return (
        <div className='grid grid-cols-1 md:grid-col-3 border-[1px] p-5 mt-5 rounded-lg'>
                {/* Drivers Image*/}
                <div>
                <Image src={drivers.attributes?.Icon?.data[0].attributes?.url}
                    width={200}
                    height={200}
                    alt='drivers-image'
                    className='rounded-lg w-full h-[270px] pbject-cover'
                    />
                </div>
                {/* Drivers Info */}
                <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>
                    <h2 className='font-bold text-2xl'>{drivers.attributes?.Name}</h2>
                    
                    <h2 className='text-md flex gap-2 text-gray-500 '>
                    <MapPin />
                      <span>Kilimani Area</span>
                    </h2>
                    
                    <BookAppointment drivers={drivers} />
                </div>
               
               {/*About Drivers*/}
               <div>
                <h2 className='font-bold text-[20px]'>
                  About Drivers
                  <p>{drivers.attributes?.Name}</p>
                </h2>
               </div>
              </div>
  )
}

export default DriverDetail
