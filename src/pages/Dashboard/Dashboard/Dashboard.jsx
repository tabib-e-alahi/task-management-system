// import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Dashboard = () => {
  const email = useParams();
//   const [mark, setMarks] = useState(false);

  console.log(email);
 
  return (
    <div className="pt-6 relative h-full">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      <h1 className="text-4xl mb-6 font-bold text-center text-[#B91C1C]">
        My Tasks
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* to-do=========== */}
        <div>
          <h1 className="flex justify-between items-center">
            <span>TO-DO</span>  <div className="tooltip" data-tip="Add New Task">
            <FaPlus className="p-2   bg-black text-white rounded-full w-6 h-6  shadow-xl" ></FaPlus>
            </div>
            
          </h1>
          <hr className="mt-2 border-2 border-black" />
          <div className="mt-4">
            <h1  className="flex justify-between items-center gap-4">
              <span>Kill The bish</span>
              <div className="tooltip" data-tip="Mark as Done"><IoCheckmarkDoneCircle className="text-2xl text-red-500"></IoCheckmarkDoneCircle></div>
              
            </h1>
          </div>
        </div>
        {/* ongoing =================== */}
        <div>
          <h1>
            Ongoing 
          </h1>
          <hr className="mt-2 border-2 border-black" />
          <div className="mt-4">
          <h1 className="flex justify-between items-center gap-4">
              <span>Kill The bish</span>
              <div className="tooltip" data-tip="Mark as Done"><IoCheckmarkDoneCircle className="text-2xl text-red-500"></IoCheckmarkDoneCircle></div>
            </h1>
          </div>
        </div>
        {/* completed ============================= */}
        <div>
          <h1>
            Completed 
          </h1>
          <hr className="mt-2 border-2 border-black" />
          <div className="mt-4">
          <h1 className="flex justify-between items-center gap-4">
              <span>Kill The bish</span>
              <div className="tooltip" data-tip="Mark as Done"><IoCheckmarkDoneCircle className="text-2xl text-red-500"></IoCheckmarkDoneCircle></div>
            </h1>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Dashboard;
