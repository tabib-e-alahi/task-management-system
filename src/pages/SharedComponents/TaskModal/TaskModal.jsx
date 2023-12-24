import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Add from "@mui/icons-material/Add";
import { Fragment, useState } from "react";
import "./TaskModal.css";

const TaskModal = ({ email }) => {
  const [open, setOpen] = useState(false);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newTaskData = {
      name: data.name,
      date: data.date,
      designation: data.designation,
      user_email: email,
    };
    console.log(newTaskData);
    const res = await axiosPublic.post("/tasks", newTaskData);
    if (res.data.insertedId) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Tasks added to the camps database.`,
        showConfirmButton: false,
        timer: 1500,
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <Fragment>
        <Button
          variant="outlined"
          color="neutral"
          startDecorator={<Add />}
          onClick={() => setOpen(true)}
        >
          New project
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog className="custom-modal">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-2">
              <div>
                {/* task name================== */}
                <div>
                  <input
                    type="text"
                    placeholder="Task name"
                    {...register("name", { required: true })}
                    className={`input focus:outline-none focus:border-0 rounded-[4px] shadow-lg  w-full px-2 py-2 mt-2 text-gray-900 font-semibold text-lg ${
                      errors.name && "border border-red-600"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-500">Name field is required</span>
                  )}
                </div>
                {/* task description================== */}
                <div>
                  <input
                    type="text"
                    placeholder="Description"
                    {...register("name", { required: true })}
                    className={` input focus:outline-none focus:border-0 rounded-[4px]  shadow-lg w-full px-2 py-2 mt-2 text-black font-normal  text-sm ${
                      errors.name && "border border-red-600"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-500">Name field is required</span>
                  )}
                </div>
              </div>

             <div className="flex justify-between items-center">
                 {/* date and time ===================== */}
              <div>
                <input
                  type="datetime-local"
                  {...register("date", { required: true })}
                  className={`input focus:outline-none focus:border-0 rounded-[4px] shadow-lg w-full px-4 py-2 text-black ${
                    errors.date && "border-red-600"
                  }`}
                />
                {errors.date && (
                  <span className="text-red-500">
                    Date and Times field is required
                  </span>
                )}
              </div>

              <div className="flex justify-end ">
                <button className="px-4 py-2  text-red-800 font-semibold  outline outline-red-800 rounded-sm bg-red-100 focus:outline-none focus:bg-gray-600">
                  Add Task
                </button>
              </div>
             </div>
            </form>
          </ModalDialog>
        </Modal>
      </Fragment>
    </div>
  );
};

export default TaskModal;
{
  /* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className="modal-box">
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
      task name==================
      <div>
        <label className="text-black" htmlFor="username">
          Task name
        </label>
        <input
          type="text"
          {...register("name", { required: true })}
          className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:ring ${
            errors.name && "border-red-600"
          }`}
        />
        {errors.name && (
          <span className="text-red-500">Name field is required</span>
        )}
      </div>
      task name==================
      <div>
        <label className="text-black" htmlFor="username">
          Task name
        </label>
        <input
          type="text"
          {...register("designation", { required: true })}
          className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:ring ${
            errors.designation && "border-red-600"
          }`}
        />
        {errors.designation && (
          <span className="text-red-500">Name field is required</span>
        )}
      </div>

   
      <div>
        <label className="text-black " htmlFor="schedule">
          Schedule Date and Time
        </label>
        <input
          type="datetime-local"
          {...register("date", { required: true })}
          className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:ring ${
            errors.date && "border-red-600"
          }`}
        />
        {errors.date && (
          <span className="text-red-500">
            Date and Times field is required
          </span>
        )}
      </div>
    </div>

    <div className="flex justify-center my-6">
      <button className="px-4 py-3  text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-600">
        Add Task
      </button>
    </div>
  </form>
  <div className="modal-action">
    <form method="dialog">
     
      <button className="btn">Close</button>
    </form>
  </div>
</div>
</dialog> */
}
