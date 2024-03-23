import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, Clock } from 'lucide-react'

  
function BookAppointment() {

    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTimeslot, setSelectedTimeSlot]=useState();

    useEffect(()=>{
        getTime();
    },[])

    const getTime=() => {
        const timeList = [];
        for (let i=10; i<= 12; i++ ){
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i=1; i<= 6; i++ ){
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }

        setTimeSlot(timeList)
    };

  return (
    <Dialog>
  <DialogTrigger>
  <Button className=' mt-3 rounded-full'>Book Car</Button>

  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Book Now</DialogTitle>
      <DialogDescription>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                   {/*Calendar */}
                   <div className='flex flex-col items-baseline'>
                    <h2 className='flex gap-2 items-center'>
                        <CalendarDays className='text-primary h-5 w-5' />
                        Select Date
                    </h2>
                   <Calendar
                        mode="single"
                         selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                   </div>

                    {/*Time Slot */}

                    <div className='mt-3 md:mt-0'>
                        <h2 className='flex gap-2 items-center mb-3'>
                            <Clock className='text-primary h-5 w-5'/>
                            Select Time Slot
                        </h2>
                        <div className='grid grid-cols-3 gap-2 border 
                        rounded-lg p-5'>
                            {timeSlot?.map((item, index)=>(
                                <h2
                                onClick={()=>setSelectedTimeSlot(item.time)}
                                className={`p-2 border cursor-pointer rounded-full
                                text-center hover:bg-primary
                                hover:text-white 
                                ${item.time==selectedTimeslot&&'bg-primary text-white '}`}                              
                                >{item.time}</h2>
                            ))}
                        </div>    

                    </div>
            </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  );
}

export default BookAppointment
