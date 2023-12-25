import React from 'react'
import '../styles/MiddleTemplate.css'
import Booking from './Booking'
import Users from './Users'
import SearchBar from '../components/SearchBar'
import Dashboard from './Dashboard'


const PageSelector = ({page}) => {

    if(page === "Booking"){
        return(
            <>
             <h1 className='PageTitle'>Booking</h1>
            <Booking />
            </>
           
        )
    }else
        if(page === "Users"){
            return(
                <>
                <h1 className='PageTitle'>Users</h1>
                <Users />
                </>
                
            )
            }
    else{
        return(
            <>
            <Dashboard />
            </>
        )


        }
}

export default function MiddleTemplate(props) {
    //the only thing i need to add is specifing the page
    return (
        <div className='MiddleTemplate'>
            <SearchBar />
                    
            <PageSelector page="User" />

            <div className='BottomPart'>
                <p>Previous page</p>
                <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                </div>
                <p>Next page</p>
            </div>
        </div>
    )
}
