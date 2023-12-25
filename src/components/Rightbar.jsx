import React from "react";
import "../styles/rightbar.css";
import Profile from "./Profile1";
import Profile2 from "./Profile2";
import Button from "./Button";


export default function Rightbar() {
    return(
        <div className="rightbar text-gray-900 p-5 px-8 text-center w-[20%]">
            <Profile />
            <div id="LoyalCustomers" className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-lg text-blue mb-2">Loyal Customers</h1>
                <Profile2 />
                <Profile2 />
                <Button content={"View All"}/>
            </div>
            <div id="async" className="flex flex-col justify-center items-center">
                <h1 className="text-blue font-semibold text-lg mb-3">Async Data</h1>
                <p className="mb-3 text-xl">For async data between local storage and database.</p>
                <Button content={"Async"}/>
            </div>
            <div id="date">
                <h1>24/12/2023</h1>
            </div>
        </div>

    )
}