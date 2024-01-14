import Booking from '../Pages/Booking'
import Users from '../Pages/Users'
import Dashboard from '../Pages/Dashboard'
import Rooms from '../Pages/Rooms'


const PageSelector = ({page}) => {

    switch(page) {
        case "Booking":
            return(
                <>
                <h1 className='PageTitle'>Booking</h1>
                <Booking />
                </>
            )
          break;
        case "Users":
            return(
                <>
                <h1 className='PageTitle'>Users</h1>
                <Users />
                </>    
            )
          break;
        case "Rooms":
            return(
                <>
                <h1 className='PageTitle'>Rooms</h1>
                <Rooms />
                </>
            )
        default:
            return(
                <>
                <Dashboard />
                </>
            )
      }

}

export default PageSelector