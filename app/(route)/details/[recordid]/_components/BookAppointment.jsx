import React, { useState } from 'react'
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
import { CalendarDays } from 'lucide-react'

  
function BookAppointment() {

    const [date, setDate] = useState(new Date)

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
                    <h2 className='flex-gap-2 items-center'>
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

                    <div>

                    </div>
            </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default BookAppointment
