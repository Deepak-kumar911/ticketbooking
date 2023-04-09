import { useRef, useState } from "react"
import { bookTicket } from "./auth"
import {toast} from 'react-toastify'
 
function App() {
  let ref = useRef()
  const [ticket,setTicket] = useState([])

  const handleClick = async()=>{
    setTicket([])
    if(ref.current.value){
      const res = await bookTicket(parseInt(ref.current.value))
      if(res && res.data){
        setTicket(res.data)
        toast.success(`Your ${ref.current.value} ticket booket`)
      }
      ref.current.value= ""
    }else{
      toast.error("please enter value")
    }
  }
return (
    <div className="bg-blue-700">
      <div className="flex  flex-col items-center justify-center h-[100vh]">
        <div className="flex flex-col bg-white shadow-md shadow-slate-300 items-center justify-center w-[90%] md:w-[20%] mx-auto gap-y-3 border border-white py-4 px-2 rounded-md">
        <h1 className="mb-5 text-blue-700 text-3xl text-center">Train Ticket Booking</h1>
        <input type="number"  ref={ref} placeholder="No. of Seats" className="w-[100%] border border-indigo-500 px-2 rounded-md outline-none h-[2rem] "/>
        <button onClick={handleClick} className="px-2 py-1 bg-indigo-500 hover:bg-orange-500 rounded-md text-white w-[100%]">Book ticket</button>
        </div>
        {ticket.length!==0 && <div className="mt-5 px-2 w-[90%] md:w-[20%] bg-white shadow-lg shadow-red-500 rounded-md">
          <div>
        <div className="flex items-center justify-between rounded-md text-white px-2 py-1"><h3 className="text-blue-700 text-lg">Ticket No:</h3>
        <button onClick={()=>setTicket([])} className="rounded-md px-2 py-1 bg-red-500 hover:bg-red-400">Clear</button>
          </div>

        <ul className="text-blue-700 pb-2">
          {ticket.map((seatNo)=><li key={seatNo}>{seatNo}</li>)}
        </ul>
        </div>
      </div>
}
      </div>
    </div>
  )
}

export default App
