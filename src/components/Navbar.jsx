import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import '../styles/Navbar.css'
import Gear from '../assets/navbar/gear.svg'
import Buildings from '../assets/navbar/Buildings.svg'
import List from '../assets/navbar/List.svg'
import Users from '../assets/navbar/Users.svg'
import SignOut from '../assets/navbar/SignOut.svg'
import Notepad from '../assets/navbar/Notepad.svg'
import SyphaxLogo from '../assets/navbar/SyphaxLogo.svg'







//i will use useContext later to pass the usestate props without passing them through the components
const Button = (props) => {
    

    let buttonstyle = props.name === props.currentPage ? 'buttonCurrentpageStyling' : 'buttonStyling'
    return (
        <button
            name={props.name}
            className={buttonstyle}
            onClick={() => {props.setCurrentPage(props.name)
                console.log(props.name)
                console.log(props.currentPage)}}
        >
            <img src={props.icon} alt="" />
            {props.name}
        </button>
    )
}




export default function Navbar() {
const [currentPage, setCurrentPage] = useState('Dashboard')

    return (
        <nav className='sideNavBar'>
                <img src={SyphaxLogo} alt="" className='LogoSyphax' />
            
                <div className='middleButtonsContainer'>
                        <Button name="Dashboard" icon={List} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                        <Button name="Booking" icon={Notepad} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                        <Button name="Users" icon={Users}  setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                        <Button name="Rooms" icon={Buildings}  setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                </div>

                <div className='bottomContainer'>
                    <Button name="Settings" icon={Gear} />
                    <Button name="Log Out" icon={SignOut} />
                </div>
           
        </nav>
    )
}