import Image from 'next/image'
import React from 'react'

function CarDetail({car}) {
  return (
    <div className='grid grid-cols-1 md:grid-col-3'>
            {/* Car Image*/}
            <div>
            <Image src={car.attributes?.Image?.data[0].attributes?.url}
                width={200}
                height={200}
                alt='car-image'
                className='rounded-lg'
                />
            </div>
            {/* Car Info */}
            <div>

            </div>
          </div>
  )
}

export default CarDetail
