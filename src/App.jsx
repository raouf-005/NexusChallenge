import React from "react";
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import MiddleTemplate from "./Pages/MiddleTemplate"
import { UsersContext } from "./components/UsersProvider";
import './App.css'




export default function App() {
  return (
    <div className="pageStructure ">
      <Navbar/>
      <UsersContext> 
      <MiddleTemplate/>
      </UsersContext>
      <Rightbar/>
    </div>
  );
}