import React from "react";
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import Booking from "./Pages/Booking";
import { UsersContext } from "./components/UsersProvider";
import './App.css'
import Dashboard from "./Pages/Dashboard";


export default function App() {
  return (
    <div className="pageStructure flex justify-center">
      <Navbar/>
      <UsersContext>
        <Dashboard/>
      </UsersContext>
      <Rightbar/>
    </div>
  );
}