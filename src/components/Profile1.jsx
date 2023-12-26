import {Avatar} from "@nextui-org/react";
import test from "../assets/booking/test.svg";

// any remplacit avatar ta3 nextui-org paceque ydir latency bzaaf
const Profile = () => {
    return (
        <div className="flex justify-center items-center text-left text-sm">
            <div className="flex text-gray-900 items-center justify-center">
                <div className="w-20 h-20 rounded-full flex justify-center items-center mr-[-8px]">
                   <img src={test}className="w-10 rounded-full object-cover bg-neutral-300" />
                </div>
                <div className="text">
                    <h1 className="font-bold text-blue">Ahmed Ahmed</h1>
                    <p id="role" className="text-gray-600">Admin</p>
                </div>
            </div>
            <div id="Notif" className="bg-gray-200 rounded-full p-2 w-fit ml-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0201 2.91C8.71009 2.91 6.02009 5.6 6.02009 8.91V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91C18.0201 5.61 15.3201 2.91 12.0201 2.91Z" stroke="#4C4C4C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                    <path d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z" stroke="#4C4C4C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06" stroke="#4C4C4C" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
            </div>
        </div>
    )
}
export default Profile