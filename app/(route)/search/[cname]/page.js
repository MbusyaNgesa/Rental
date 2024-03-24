"use client"
import CarList from '@/app/_components/CarList';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function Search({params}) {

  const [carList, setCarList]=useState([]);

  useEffect(()=>{
    console.log(params.cname);
    getCars();
  },[])

  const getCars=()=>{
    GlobalApi.getCarByCategory(params.cname).then(resp=>{
      setCarList(resp.data.data)
    })
  }

  return (

    <div className='mt-5' >
      <CarList heading={params.cname}
      carList={carList}
      />
    </div>
  )
}

export default Search
