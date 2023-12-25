import Booking from '../Pages/Booking'
import Users from '../Pages/Users'
import Dashboard from '../Pages/Dashboard'



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
        default:
            return(
                <>
                <Dashboard />
                </>
            )
      }

}

export default PageSelector