import React, { useEffect } from "react";
import {useState,createContext} from 'react'
export const UsersProvider = createContext()

const  usersBookingArray = [
    {
        id: 1,
        name: "raouf",
        img: "test.svg",
        state: "pending",
        date: "12/12/2021",
        room: "1"
    },
    {
        id: 2,
        name: "mihi",
        img: "test.svg",
        state: "pending",
        date: "12/12/2021",
        room: "2"
    },
    {
        id: 3,
        name: "khnitro",
        img: "test.svg",
        state: "pending",
        date: "12/12/2021",
        room: "3"
    },
    {
        id: 4,
        name: "hey",
        img: "test.svg",
        state: "Pending",
        date: "12/12/2021",
        room: "32"
    },
    {
        id: 5,
        name: "take",
        img: "test.svg",
        state: "pending",
        date: "12/12/2021",
        room: "34"
    },
    {
        id: 6,
        name: "taking",
        img: "test.svg",
        state: "pending",
        date: "12/12/2021",
        room: "55"
    },
    {
        id: 7,
        name: "sol",
        img: "test.svg",
        state: "pending",
        date: "12/12/2021",
        room: "12"
    },
    {
        id: 8,
        name: "hey there",
        img: "test.svg",
        state: "pending",
        date: "12/12/2021",
        room: "10"
    }


]
 




export function UsersContext({children}) {
    //temporary solution
  

const [bookingArray, setBookingArray] = useState(JSON.parse(localStorage.getItem('usersBookingArray')) || usersBookingArray)    
useEffect(() => {
    localStorage.setItem('usersBookingArray',JSON.stringify(bookingArray))
 },[bookingArray])
    
    return(

    <UsersProvider.Provider value={{bookingArray,setBookingArray}}> 
        {children}
    </UsersProvider.Provider>
)
    }