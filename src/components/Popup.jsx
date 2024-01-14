import React, { useEffect ,useContext} from 'react';
import { currentPageContext } from '../App';
import { UsersContext, UsersProvider } from './UsersProvider';
import '../styles/popups.css'
export default function Popup() {

   const {idSure,setIdSure} = React.useContext(currentPageContext)
   const {bookingArray,setBookingArray} = useContext(UsersProvider)
   const confirmDelete = (res) => {
        const popupstyling = document.querySelector('.popup');
        const newBookingArray = bookingArray.filter((user) => user.id !== idSure);
        if (res ===true){ 
            setBookingArray(newBookingArray); 
        }
        popupstyling.style.display = 'none';
   }
    return(

        <div className="popup" id='pop'>
            <h1 className='titlepopup'>Are You Sure?</h1>
            <p className='popupdescr'>Please confirm this operation before we start</p>
            <div className='buttoncontainerpopup'>
                <button onClick={()=>confirmDelete(true)} className='confirmbuttonpopup'>Confirm</button>
                <button onClick={()=>confirmDelete(false)} className='cancelbuttonpopup'>Cancel</button>
            </div>
           
        </div>
    )
}