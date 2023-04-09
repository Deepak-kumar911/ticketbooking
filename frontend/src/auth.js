import axios  from "axios";
import {toast} from 'react-toastify'
const endPoint = "https://ticketbooking-backend.vercel.app";

const bookTicket = async (no_of_seats)=>{
   try {
    const res = await axios.patch(`${endPoint}/api/ticketBooking/64324368ecaf66972e9c6f49`,{seats:no_of_seats})
    return res
   } catch (err) {
    if(err && err.response){
     toast.error(err.response.data)
    }else{
        toast.error(err)
    }
   }
}

export {bookTicket}