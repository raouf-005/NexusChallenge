import React from 'react'
import '../styles/Booking.css'
import UserBooking from '../components/UserBooking'
import { useContext } from 'react'
import { UsersProvider } from '../components/UsersProvider'



export default function Booking() {

    const {bookingArray,setBookingArray} = useContext(UsersProvider)
    return (
            <div className='Bookingusertable'>
                {bookingArray.map((userBooking) => {
                    return <UserBooking key={userBooking.id} {...userBooking} />
                })}
            </div>   
    )
}