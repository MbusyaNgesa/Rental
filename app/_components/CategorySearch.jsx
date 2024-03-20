"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

function CategorySearch() {

  const [categoryList, setCategoryList]=useState([]);

  useEffect(()=> {
    getCategoryList()
  }, [])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }

  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-4'>
      <h2 className='font-bold
      text-4xl tracking-wide'>Search <span className='text-primary '>Cars & Drivers</span></h2>
      <h2 className='text-grey-500 text-xl'>Search Cars & Drivers in one click </h2>

      <div className="flex w-full max-w-sm mt-3 items-center space-x-2">
      <Input type="text" placeholder="Search" />
      <Button type="submit">
        <Search className='h-4 w-4 mr-2'/>
        Search</Button>
    </div>

      {/* Display List of Category */}
      <div className='grid grid-cols-3 
      md:grid-cols-3 lg:grid-cols-6'>
      {categoryList.length>0?categoryList.map((item, index)=>index<6&&(
        <Link href={'/search/'+item.attributes.Name} key={index} className='flex flex-col text-center
        gap-3 items-center
        p-5 bg-primary m-2 round-lg cursor-pointer mt-5
        hover:scale-110 transition-all ease-in-out ' >
          <Image src={item.attributes?.Icon?.data[0].attributes?.url} 
          alt='icon' 
          width={40} 
          height={40} />
          <label className='text-primary-600 text-sm'>{item?.attributes?.Name}</label>
        </Link>
      ))
    :
   
      [1,2,3,4,5,6].map((item,index)=>(
        <div className=' bg-slate-200 m-2
        rounded-lg w-[130px] h-[120px] animate-pulse'>

        </div>
      ))
    
    }
      </div>
    </div>
  )
}

export default CategorySearch
