import React from "react";
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import Booking from "./components/Booking";
import { UsersContext } from "./components/UsersProvider";
import './App.css'


export default function App() {
  return (
    <div className="pageStructure">
      <Navbar/>
      <UsersContext>
      <Booking/>
      </UsersContext>
      <Rightbar/>
    </div>
  );
}