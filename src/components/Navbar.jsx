import react from 'react';




export default function Navbar() {
const [pages, setPages] = useState()

    return (
        <nav>
            <h1>hotel</h1>
            <div>
                <button>
                    <img src="" alt="" />
                    Dashboard
                </button>
                <button>
                    <img src="" alt="" />
                    Booking
                </button>
                <button>
                    <img src="" alt="" />
                    Users
                </button>
                <button>
                    <img src="" alt="" />
                    Rooms
                </button>
            </div>

            <div>
                <button>
                    <img src="" alt="" />
                    Settings
                </button>
                <button>
                    <img src="" alt="" />
                    Log Out
                </button>
            </div>
        </nav>
    )


}