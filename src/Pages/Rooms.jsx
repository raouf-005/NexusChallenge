import React from "react";
import cancel from "../assets/booking/cancel.svg";
import '../styles/Users.css'
import test from "../assets/booking/test.svg";

const Room = (props)=>{
    const date = new Date().toLocaleDateString("en-US");
    return(
        <>
        <div className="flex justify-around  pt-3 pb-3 ">
            <h4>{`Room ${props.number}`}</h4>
            <p>{`${props.type} Bed`}</p>
            <p> {`${props.nbrperson} Person`}</p>
            <p>{props.available?"Availble":"Not Availble"}</p>
            <button>Booking</button>
        </div>
        
        <hr className="border-solid border-grey-500 mt-2.5 w-auto col-span-5 ml-16"/>
        
        </>
    )
}
    
const rooms=[{
    id:1,
    number:1,
    type:"Single",
    nbrperson:1,
    available:true
},
{
    id:2,
    number:2,
    type:"Double",
    nbrperson:2,
    available:true
},
{
    id:3,
    number:3,
    type:"Triple",
    nbrperson:3,
    available:false
},
{
    id:4,
    number:4,
    type:"Single",
    nbrperson:1,
    available:true
},
{
    id:5,
    number:5,
    type:"Double",
    nbrperson:2,
    available:true
},
{
    id:6,
    number:6,
    type:"Triple",
    nbrperson:3,
    available:false
},
{
    id:7,
    number:7,
    type:"Single",
    nbrperson:1,
    available:true
},
{
    id:8,
    number:8,
    type:"Double",
    nbrperson:2,
    available:true
},
{
    id:9,
    number:9,
    type:"Triple",
    nbrperson:3,
    available:false
},
{
    id:10,
    number:10,
    type:"Single",
    nbrperson:1,
    available:true
},
{
    id:11,
    number:11,
    type:"Double",
    nbrperson:2,
    available:true
},
{
    id:12,
    number:12,
    type:"Triple",
    nbrperson:3,
    available:false
},
{
    id:13,
    number:13,
    type:"Single",
    nbrperson:1,
    available:true
},
{
    id:14,
    number:14,
    type:"Double",
    nbrperson:2,
    available:true
},
{
    id:15,
    number:15,
    type:"Triple",
    nbrperson:3,
    available:false
},
{
    id:16,
    number:16,
    type:"Single",
    nbrperson:1,
    available:true
},
{
    id:17,
    number:17,
    type:"Double",
    nbrperson:2,
    available:true
},
{
    id:18,
    number:18,
    type:"Triple",
    nbrperson:3,
    available:false
},
{
    id:19,
    number:19,
    type:"Single",
}]




export default function Rooms() {

    

    const users =JSON.parse(localStorage.getItem('usersBookingArray')) || []

  return (
    <div className="Room">
            <div>
                {
                    rooms.map((room)=>{
                        return <Room key={room.id} {...room}/>
                    })
                }

            </div>


    </div>
  );
}