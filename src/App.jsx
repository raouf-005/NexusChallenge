import React ,{ createContext ,useState }  from "react";
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import MiddleTemplate from "./Pages/MiddleTemplate"
import { UsersContext } from "./components/UsersProvider";
import './App.css'
export const currentPageContext = createContext()



export default function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard')
  const [idSure,setIdSure] = useState(0)
  return (
    <div className="pageStructure ">
     <currentPageContext.Provider value={{currentPage,setCurrentPage,idSure,setIdSure}}>
      <Navbar/>
      <UsersContext> 
      <MiddleTemplate/>
      </UsersContext>
      <Rightbar/>
      </currentPageContext.Provider>
    </div>
  );
}