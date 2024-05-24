import NavBar from "@/utils/NavBar"
import MyButton from "@/MyComponent/Button"
import Dialog from "@/MyComponent/Dialog"
// import MyInput from "@/MyComponent/Input"
import { useState } from "react"

const MyDashboard = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () =>{
    setShowDialog(true);
  }

  const handleCloseDialog = () => {
    setShowDialog(false);
  }
//   const handleBook =() =>{
// //
//   }
  return(
    <div className="m-0">
      <NavBar />    
      <Dialog
        title="Book Ticket"
        body={
          <>
            <input type="text" placeholder="Name" className="mb-2" />
            <input type="number" placeholder="Ticket Quantity" />
          </>
        }
        isOpen={showDialog}
        onClose={handleCloseDialog}
      />
      <div className='w-full pt-16'>
        <div className='grid lg:grid-cols-4 gap-0 xl:mr-28 xl:ml-28 mt-8 mb-20 '>
          <div className="h-72 rounded-lg border-[1px] m-2 box hover:-translate-y-2 pt-12">
            <h4 className='text-center text-xl h-12 font-bold main-color'>Rihanna Ticket</h4>
             <div className="ml-6">
              <p> Friday 25 May 2024</p>
              <div className="grid lg:grid-cols-3 gap-0 items-center mt-8">
                <div>
                  <h2 className="text-lg">Time</h2>
                  <h2 className="text-lg">5:00PM</h2>
                </div>
                <div>
                  <h2 className="text-lg">Ticket</h2>
                  <h2 className="text-lg">5000</h2>
                </div>
                <MyButton value="Book" color="blue" width="5vw" onClick={handleOpenDialog}  />
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyDashboard