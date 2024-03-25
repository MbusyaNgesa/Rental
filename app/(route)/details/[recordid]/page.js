"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import CarDetail from './_components/CarDetail';

function Details({params}) {

  const [car, setCar]=useState();

  useEffect(()=>{
    getCarById();
  }, [])

  const getCarById =()=>{
    GlobalApi.getCarById(params.recordId).then(resp=>{
      setCar(resp.data.data);
    })
  }

  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'>Details</h2>

      <div className='grid grid-cols-1 lg:grid-cols-4' >
        {/*Car Details*/}
          <div className='col-span-3'>
         {car&& <CarDetail car={car} />}
            
          </div>
          {/*Car Suggestions*/}
          <div>

          </div>
      </div>
    </div>
  )
}

export default Details
