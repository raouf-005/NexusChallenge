import React, { useEffect } from "react";
import "../styles/Booking.css";
import test from "../assets/booking/test.svg";
import CheckFat from "../assets/booking/CheckFat.svg";
import cancel from "../assets/booking/cancel.svg";
import { useContext } from "react";
import { UsersProvider } from "./UsersProvider";






export default function UserBooking(props) {
    
    
   const {bookingArray,setBookingArray} = useContext(UsersProvider)
   
     const deleteBooking = (id) => {
    const newBookingArray = bookingArray.filter((user) => user.id !== id);
    setBookingArray(newBookingArray);
    };

    const date = new Date().toLocaleDateString("en-US");
   
    useEffect(() => { 
        localStorage.setItem('usersBookingArray',JSON.stringify(bookingArray))
     ,[bookingArray]})
  


    return (
           <div className="userBookingContainer">
                <div className="userImgNameContainer">
                    <img src={test ||props.img} alt="" />
                    <h4 className="userName">{props.name}</h4>
                </div>
                    
                    <button className="userBtn">{props.state}</button>
                    <p className="bookingDate">{date} &#8594; {date}</p>
                    <p>Room 32</p>
                
                <div className="checkContainer">
                    <img src={CheckFat} alt="" className="checkBtn"/>
                    <img src={cancel} alt=""  className="checkBtn" onClick={()=>deleteBooking(props.id)}/>
                </div>
                <hr className="border-solid border-grey-500 mt-2.5 w-auto col-span-5"/>
           </div>
    );

}

