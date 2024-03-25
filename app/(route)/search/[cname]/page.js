"use client"
import CarList from '@/app/_components/CarList';
import Drivers from '@/app/_components/Drivers';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function Search({params}) {

  const [carList, setCarList]=useState([]);
  const [drivers,setDrivers]=useState([]);

  useEffect(()=>{
    console.log(params.cname);
    getCars();
    getDrivers();
  },[])

  const getCars=()=>{
    GlobalApi.getCarByCategory(params.cname).then(resp=>{
      setCarList(resp.data.data)
    })
  }

  const getDrivers=() =>{
    GlobalApi.getDrivers(params.cname).then(resp=>{
      setDrivers(resp.data.data)
      
    })
  }

  return (

    <div className='mt-5' >
      <CarList heading={params.cname}
      carList={carList}
      />

      <div className='mt-5' >
        <Drivers heading={params.cname}
        drivers={drivers}
        />
        
      </div>
    </div>

      
  )
}

export default Search
