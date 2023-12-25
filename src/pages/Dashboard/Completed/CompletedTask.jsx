import { FaDeleteLeft } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const CompletedTask = ({task,refetch}) => {
    const {_id,title, deadline, priority, description } = task;
    const axiosPublic = useAxiosPublic()

    const handleDelete = async() =>{
      const deleteRes = await axiosPublic.delete(`/completedTasks/${_id}`)
        console.log(deleteRes.data);
        refetch();
    }


    return (
        <div>
      <div className="w-full h-fit  flex flex-col justify-between items-start  rounded-sm  border-b-2 border-green-800  pt-3 px-2 ">
        <div className="">
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

export default CompletedTask;