"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import CarList from "./_components/CarList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {

  const [carList,setCarList]=useState([]);

  useEffect(()=>{
    getCarList();
  }, [])

  const getCarList=() =>{
    GlobalApi.getCarList().then(resp=>{
      console.log(resp.data.data);
      setCarList(resp.data.data);
    })
  }

  return (
    <div>
     {/* Hero Setion */}
     <Hero />

     {/* Search bar + Categories*/}
     <CategorySearch />

     {/* Popular Doctor List */}
      < CarList carList={carList} />

    </div>
  );
}
