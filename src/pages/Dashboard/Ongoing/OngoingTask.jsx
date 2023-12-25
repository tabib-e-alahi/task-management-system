import { FaDeleteLeft } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { TiTick } from "react-icons/ti";

const OngoingTask = ({task,refetch}) => {
    const { title, deadline, priority, description } = task;
    console.log(task);

    const axiosPublic = useAxiosPublic();
  const handleTaskCompleted = async () => {
    const res = await axiosPublic.post("/completedTasks", task);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Task Completed`,
        showConfirmButton: false,
        timer: 1500,
      });

      const deleteRes = await axiosPublic.delete(`/deleteOngoing/${task._id}`)
      console.log(deleteRes.data);
      refetch()

    }
  };

  const handleDelete = async() =>{
    const deleteRes = await axiosPublic.delete(`/deleteOngoing/${task._id}`)
      console.log(deleteRes.data);
      refetch();
  }



    return (
        <div >
      <div  className={` w-full h-fit  flex flex-col justify-between items-start  rounded-sm  border-b-2 border-orange-800  pt-3 px-2`}>
        <div className="flex items-baseline gap-2">
          <div className="">
            <button
              onClick={handleTaskCompleted}
              className="rounded-full p-0.5  w-5 h-5 border border-black flex justify-center items-center"
            >
              <TiTick className="opacity-0 hover:opacity-70"></TiTick>
            </button>
          </div>
          <div className="">
            <div>
              <h4 className="text-gray-800 font-medium ">
                {title}{" "}
                <span className="badge ml-1 badge-error badge-outline">
                  priority: {priority}
                </span>
              </h4>
              <p className="text-gray-600 text-sm mb-2.5">{description}</p>
            </div>

            <div className="flex gap-20 justify-between items-center mb-2">
            <div
              className=" border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center"
              aria-label="Due on"
              role="contentinfo"
            >
              <p className="ml-2">{deadline}</p>
            </div>
            <FaDeleteLeft onClick={handleDelete} className="text-[#f60] text-3xl"></FaDeleteLeft>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default OngoingTask;