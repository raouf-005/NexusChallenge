import React from "react";
import cancel from "../assets/booking/cancel.svg";
import '../styles/Users.css'
import test from "../assets/booking/test.svg";

const User = (props)=>{
    const date = new Date().toLocaleDateString("en-US");
    return(
        <>
        <div className="userContainer">
            <div className="userleftSection">
                <img src={test} alt="" />
                <h4 className="userName">{props.name}</h4>
            </div>
             <p className="userDate">{date}</p>
                
            <img src={cancel} alt=""  className="checkBtn" />
            
        </div>
        
        <hr className="border-solid border-grey-500 mt-2.5 w-auto col-span-5 ml-16"/>
        
        </>
    )
}
    





export default function Users() {

    

    const users =JSON.parse(localStorage.getItem('usersBookingArray')) || []

  return (
    <div className="Users">
            <div>
                {
                    users.map((user)=>{
                        return <User key={user.id} {...user}/>
                    })
                }

            </div>


    </div>
  );
}