import React, { createContext, useEffect ,useContext} from 'react';
import { useState } from 'react';
import '../styles/Navbar.css'
import Gear from '../assets/navbar/gear.svg'
import Buildings from '../assets/navbar/Buildings.svg'
import List from '../assets/navbar/List.svg'
import Users from '../assets/navbar/Users.svg'
import SignOut from '../assets/navbar/SignOut.svg'
import Notepad from '../assets/navbar/Notepad.svg'
import SyphaxLogo from '../assets/navbar/SyphaxLogo.svg'
import { currentPageContext } from '../App';

function Button(props)  {
    
    const {currentPage,setCurrentPage} = useContext(currentPageContext)
    let buttonstyle = props.name ===currentPage ? 'buttonCurrentpageStyling' : 'buttonStyling'
    
//not page is only temporary for setting and logout until we do there functionnality
    return (
        <button
            name={props.name}
            className={buttonstyle}
            onClick={() => {props.notPage || setCurrentPage(props.name)}}
        >
            <img src={props.icon} alt="" />
            {props.name}
        </button>
    )
}



export default function Navbar() {


    return (
        <nav className='sideNavBar'>
                <img src={SyphaxLogo} alt="" className='LogoSyphax' />
            
                <div className='middleButtonsContainer'>  
                        <Button name="Dashboard" icon={List} />
                        <Button name="Booking" icon={Notepad} />
                        <Button name="Users" icon={Users}  />
                        <Button name="Rooms" icon={Buildings} />
                </div>

                <div className='bottomContainer'>
                    <Button name="Settings" icon={Gear} notPage={true} />
                    <Button name="Log Out" icon={SignOut} notPage={true}/>
                </div>
           
        </nav>
    )
}



