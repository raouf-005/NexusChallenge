import React, { useEffect,useState,useContext, createContext } from "react";
import "../styles/Booking.css";
import test from "../assets/booking/test.svg";
import CheckFat from "../assets/booking/CheckFat.svg";
import cancel from "../assets/booking/cancel.svg";
import { UsersProvider } from "./UsersProvider";
import Popup from "./Popup";
import { currentPageContext } from "../App";



export default function UserBooking(props) {
   const {bookingArray,setBookingArray} = useContext(UsersProvider)
   const {idSure,setIdSure} = useContext(currentPageContext)

     const checkdeleting = (id) => {
      
       const popupstyling = document.querySelector('.popup')
        popupstyling.style.display = 'block';
        setIdSure(id)
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
                    <img src={cancel} alt=""  className="checkBtn" onClick={()=>checkdeleting(props.id)}/>
                </div>
                <hr className="border-solid border-grey-500 mt-2.5 w-auto col-span-5"/>
           </div>
    );

}

