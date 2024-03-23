import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CarDetail({car}) {
  return (
    <div className='grid grid-cols-1 md:grid-col-3 border-[1px] p-5 mt-5 rounded-lg'>
            {/* Car Image*/}
            <div>
            <Image src={car.attributes?.Icon?.data[0].attributes?.url}
                width={200}
                height={200}
                alt='car-image'
                className='rounded-lg w-full h-[270px] pbject-cover'
                />
            </div>
            {/* Car Info */}
            <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>
                <h2 className='font-bold text-2xl'>{car.attributes?.Name}</h2>
                
                <h2 className='text-md flex gap-2 text-gray-500 '>
                <MapPin />
                  <span>Kilimani Area</span>
                </h2>
                <Button className=' mt-3 rounded-full'>Book Car</Button>
            </div>
           
           {/*About Car*/}
           <div>
            <h2 className='font-bold text-[20px]'>
              About car
              <p>{car.attributes?.Name}</p>
            </h2>
           </div>
          </div>
  )
}

export default CarDetail
