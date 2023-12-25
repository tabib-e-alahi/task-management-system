// import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
// import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Option, Select } from "@mui/joy";
import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment/moment";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Ongoing from "../Ongoing/Ongoing";
import Completed from "../Completed/Completed";
import { useQuery } from "@tanstack/react-query";
import ToDoS from "../ToDoS/ToDoS";
import DashNavBar from "../../SharedComponents/DashNavBar/DashNavBar";



const Dashboard = () => {
  const { email } = useParams();
  const [openForm, setOpenForm] = useState(false);
  //   const [mark, setMarks] = useState(false);

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formattedDeadline = moment(data.deadline).format("LLLL");
    const newTaskData = {
      title: data.title,
      deadline: formattedDeadline,
      description: data.description,
      priority: data.priority,
      user_email: email,
    };
    console.log(newTaskData);
    const res = await axiosPublic.post("/tasks", newTaskData);
    console.log(res.data);
    if (res.data.insertedId) {
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Task Added`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
      setOpenForm(false);
    }
  };
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks",email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks?email=${email}`);
      return res.data;
    },
  });

 

  const handleTaskDrop = async(droppedTask) => {
    console.log('From fropped:',droppedTask);
    const res =await axiosPublic.post('/ongoingTasks',droppedTask);
    console.log(res.data);
    const delRes = await axiosPublic.delete(`/tasksDelete/${droppedTask.id}`);
    console.log(delRes.data);
    await refetch();
  };

  

  return (
    <div>
      <DashNavBar></DashNavBar>
      <div className="py-10 relative h-full">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
          {/* to-do=========== */}
          <div className="bg-blue-100 p-4 rounded-md">
            <h1 className="flex justify-between items-center">
              <span className="text-[#007FFF] font-bold text-2xl">TO-DO</span>
            </h1>
            <hr className="mt-2 border-2 border-[#007FFF]" />
            <div className="">
              <div className="grid grid-cols-1  ">
                {tasks.map((task) => (
                  <ToDoS key={task._id} task={task} refetch={refetch} onTaskDrag={() => {}}></ToDoS>
                ))}
              </div>
              <button
                onClick={() => setOpenForm(true)}
                className=" flex flex-row items-baseline gap-1 mt-2"
              >
                <FaPlus className="text-base text-red-500 "></FaPlus>
                <span className="text-lg font-semibold text-red-400">
                  Add task{" "}
                </span>
              </button>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`grid grid-cols-1 border border-[#007FFF] p-3 rounded-md ${
                  openForm ? "" : "hidden"
                }`}
              >
                <div>
                  {/* task name================== */}
                  <div>
                    <input
                      type="text"
                      placeholder={`${
                        errors.title ? "Task name is required" : "Task Name"
                      }`}
                      {...register("title", { required: true })}
                      className={`focus:outline-none focus:border-0 rounded-[4px] pl-1 pb-1  w-full  text-gray-800 font-normal text-lg ${
                        errors.title && "border border-red-500 text-red-600"
                      }`}
                    />
                  </div>
                  {/* task description================== */}
                  <div>
                    <input
                      type="text"
                      {...register("description", { required: true })}
                      placeholder={`${
                        errors.description
                          ? "Task name is required"
                          : "Description"
                      }`}
                      className={` focus:outline-none focus:border-0 rounded-[4px] pl-1 pb-1 w-full text-black font-normal  text-sm ${
                        errors.description &&
                        "border border-red-500 text-red-600"
                      }`}
                    />
                  </div>
                </div>

                <div className="">
                  {/* date and time ===================== */}
                  <div className="flex items-center mt-2 gap-2">
                    <input
                      type="datetime-local"
                      {...register("deadline", { required: true })}
                      className={` border  h-8 border-gray-200 focus:outline-none focus:border-0 rounded-[4px] w-fit pl-1 text-gray-600 ${
                        errors.deadline && "border border-red-500 text-red-600"
                      }`}
                    />
                    <div>
                      <Select
                        className=""
                        {...register("priority", {
                          required: true,
                        })}
                        color="danger"
                        placeholder="Priority"
                        size="sm"
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
                  <button
                    onClick={() => setOpenForm(false)}
                    className="px-3 py-1.5  text-[#007FFF]   outline outline-[#007FFF] rounded-md  "
                  >
                    Cancel
                  </button>
                  <button className="px-3 py-1.5  text-white   outline outline-[#007FFF] rounded-md bg-[#007FFF]  ">
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* ongoing =================== */}
          <Ongoing  onTaskDrop={handleTaskDrop}></Ongoing>
          {/* completed ============================= */}
          <Completed email={email}></Completed>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
