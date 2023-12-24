// import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

import { Option, Select } from "@mui/joy";
import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment/moment";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Dashboard = () => {
  const {email} = useParams();
  const [openForm, setOpenForm] = useState(false)
  //   const [mark, setMarks] = useState(false);

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formattedDeadline =
    moment(data.deadline).format("LLLL");
    const newTaskData = {
      title: data.title,
      deadline: formattedDeadline,
      description: data.description,
      priority:data.priority,
      user_email: email,
    };
    console.log(newTaskData);
    const res = await axiosPublic.post("/tasks", newTaskData);
    if (res.data.insertedId) {
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Task Added`,
        showConfirmButton: false,
        timer: 1500,
      });
      setOpenForm(false)
    }
  };




  console.log(email);

  return (
    <div className="py-10 relative h-full">
      <h1 className="text-4xl mb-16 font-bold text-center text-[#B91C1C]">
        My Tasks
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
        {/* ongoing =================== */}
        <div>
          <h1>Ongoing</h1>
          <hr className="mt-2 border-2 border-black" />
          <div className="mt-4">
            <h1 className="flex justify-between items-center gap-4">
              <span>Kill The bish</span>
              <div className="tooltip" data-tip="Mark as Done">
                <IoCheckmarkDoneCircle className="text-2xl text-red-500"></IoCheckmarkDoneCircle>
              </div>
            </h1>
          </div>
        </div>
        {/* completed ============================= */}
        <div className="">
          <h1>Completed</h1>
          <hr className="mt-2 border-2 border-black" />
          <div className="mt-4">
            <h1 className="flex justify-between items-center gap-4">
              <span>Kill The bish</span>
              <div className="tooltip" data-tip="Mark as Done">
                <IoCheckmarkDoneCircle className="text-2xl text-red-500"></IoCheckmarkDoneCircle>
              </div>
            </h1>
          </div>
        </div>
        {/* to-do=========== */}
        <div className="lg:col-span-2 lg:w-2/3 mx-auto">
          <h1 className="flex justify-between items-center">
            <span className="text-[#007FFF] font-bold text-2xl">TO-DO</span>
            <div className="tooltip" data-tip="Add New Task">
              <FaPlus
                onClick={() =>setOpenForm(true)}
                className="p-2   bg-black text-white rounded-full w-6 h-6  shadow-xl"
              ></FaPlus>
            </div>
          </h1>
          <hr className="mt-2 border-2 border-[#007FFF]" />
          <div className="mt-4">
            <h1 className="flex justify-between items-center gap-4 mb-10">
              <span>Kill The bish</span>
              <div className="tooltip" data-tip="Mark as Done">
                <IoCheckmarkDoneCircle  className="text-2xl text-red-500"></IoCheckmarkDoneCircle>
              </div>
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}  className={`grid grid-cols-1 border border-[#007FFF] p-3 rounded-md ${openForm ? '' : 'hidden'}`}>
              <div>
                {/* task name================== */}
                <div>
                  <input
                    type="text"
                    placeholder={`${errors.title ? "Task name is required" : 'Task Name'}`}
                    {...register("title", { required: true })}
                    className={`focus:outline-none focus:border-0 rounded-[4px] pl-1 pb-1  w-full  text-black font-medium text-xl ${errors.title && 'border border-red-500 text-red-600'}`}
                  />
                </div>
                {/* task description================== */}
                <div>
                  <input
                    type="text"
                    {...register("description", { required: true })}
                    placeholder={`${errors.description ? "Task name is required" : 'Description'}`}
                    className={` focus:outline-none focus:border-0 rounded-[4px] pl-1 pb-1 w-full text-black font-normal  text-sm ${errors.description && 'border border-red-500 text-red-600'}`}
                  />
                </div>
              </div>

              <div className="">
                {/* date and time ===================== */}
                <div className="flex items-center mt-2 gap-2">
                  <input
                    type="datetime-local"
                    {...register("deadline", { required: true })}
      
                    className={` border  h-10 border-gray-200 focus:outline-none focus:border-0 rounded-[4px] w-fit pl-1 text-gray-600 ${errors.deadline && 'border border-red-500 text-red-600'}`}
                  />
                  <div>
                    <Select className="h-8"
{...register("priority", {
  required: true,
})}
                      color="danger"
                      placeholder="Priority"
                      size="lg"
                      variant="outlined"
                    >
                      <Option value="low">Low</Option>
                      <Option value="moderate">Moderate</Option>
                      <Option value="high">High</Option>
                    </Select>
                  </div>
                </div>
              </div>
              <hr className="my-2 border border-[#a7c9eb]" />
              <div className="flex justify-end gap-2 ">
                <button  onClick={() =>setOpenForm(false)} className="px-3 py-1.5  text-[#007FFF]   outline outline-[#007FFF] rounded-md  ">
                  Cancel
                </button>
                <button className="px-3 py-1.5  text-white   outline outline-[#007FFF] rounded-md bg-[#007FFF]  ">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
