import searchBtn from '../assets//booking/searchBtn.svg'

const SearchBar = () => {
    return (
        <div className='searchContainer'>
            <input type="text" placeholder="Search users,rooms" className='searchinput'/>
            <button className='searchBtn'><img src={searchBtn} alt="" /></button>
        </div>
    )
}

export default SearchBar