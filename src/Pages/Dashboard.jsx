import { useContext } from "react"
import Card from "../components/Card"
import UserBooking from '../components/UserBooking'
import { UsersProvider } from '../components/UsersProvider'
import FilterBtn from '../assets/Dashboard/filter-search.svg'
import '../styles/Dashboard.css'
const Dashboard = () => {
    const { bookingArray, setBookingArray } = useContext(UsersProvider);
    return(
        <>

            <div className="mb-10">
                <h1 className="p-8 text-lg font-semibold w-[90%]">In the last 30 days: </h1>
                <div id="Wrapper" className="flex gap-5 w-[90%] ml-10">
                    <Card Number={'30,000'} Operation={"Booking Operations"} />
                    <Card Number={'12,000'} Operation={"Done Booking"} />
                    <Card Number={'17,000'} Operation={"Satisfied Clients"} />
                </div>
            </div>
            <div className='dashboardUserContainer'>
            <h1 className="text-start w-[90%] text-xl font-semibold">All Users</h1>
            <div className="flex justify-between w-[92%] ml-20">
                <p>Monitor users, Booking ...etc</p>
                <div id="filter" className="flex p-2 border-2 border-gray-600 rounded-lg w-fit">
                    <img src={FilterBtn} alt="" />
                    <p>Filter</p>
                </div>
            </div>
            <div >
            {bookingArray.map((userBooking) => (
                <UserBooking key={userBooking.id} {...userBooking} />
            ))}
            </div>
            </div>
        </>
    )

}
//mb3d changer liste dir wahda ta3 dashboard paceque styling ta3 user fih margin okan nhi margin tfzd lwla 
export default Dashboard