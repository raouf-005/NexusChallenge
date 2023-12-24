import {Avatar} from "@nextui-org/react";

const Profile2 = () => {
    return(
        <div className="flex justify-between items-center w-[75%] text-sm my-[-10px]">
            <div className="flex text-gray-900 items-center justify-center">
                <div className="w-16 h-16 rounded-full flex justify-center items-center mr-[-8px]">
                    <Avatar className="h-8 w-8" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </div>
                <div className="text">
                    <h1 className="font-semibold text-blue">Yasmine</h1>
                </div>
            </div>
            <div id="Bookings" className="text-sm">
                +10 Bookings
            </div>
        </div>
    )
}

export default Profile2