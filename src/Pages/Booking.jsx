import React from 'react'
import '../styles/Booking.css'
import searchBtn from '../assets//booking/searchBtn.svg'
import UserBooking from '../components/UserBooking'
import { useContext } from 'react'
import { UsersProvider } from '../components/UsersProvider'



export default function Booking() {

    const {bookingArray,setBookingArray} = useContext(UsersProvider)
    return (
        <div className='Booking'>
            <div className='searchContainer'>
            <input type="text" placeholder="Search users,rooms" className='searchinput'/>
            <button className='searchBtn'><img src={searchBtn} alt="" /></button>
            </div>
            <h1 className='bookingTitle'>Booking</h1>
            <div className='userContainer'>
                {bookingArray.map((userBooking) => {
                    return <UserBooking key={userBooking.id} {...userBooking} />
                })}
            </div>
            <div className='bookingBottom'>
                <p>Previous page</p>
                <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                </div>
                <p>Next page</p>
            </div>
        </div>
    )
}