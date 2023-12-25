import React from 'react'
import '../styles/MiddleTemplate.css'
import SearchBar from '../components/SearchBar'
import PageSelector from '../components/PageSelector'
import { currentPageContext } from '../App'

export default function MiddleTemplate(props) {
    const {currentPage,setCurrentPage} = React.useContext(currentPageContext)


    return (
        <div className='MiddleTemplate'>
            <SearchBar />  
            <PageSelector page={currentPage} />
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
