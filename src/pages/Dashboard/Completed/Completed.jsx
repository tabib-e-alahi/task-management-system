import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CompletedTask from "./CompletedTask";

const Completed = ({email}) => {
    const axiosPublic = useAxiosPublic();
    

    const { data: completedTasks = [], refetch } = useQuery({
        queryKey: ["completedTasks"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/completedTasks?email=${email}`);
          return res.data;
        },
      });


    return (
        <div className="bg-green-100 p-4 rounded-md">
        <h1 className="flex justify-between items-center">
            <span className="text-green-600 font-bold text-2xl">Completed</span>  
          </h1>
          <hr className="mt-2 border-2 border-green-600" />
        <div className="">
          <div className="grid grid-cols-1 ">
          {
            completedTasks?.map(task => <CompletedTask key={task._id} task={task} refetch={refetch}></CompletedTask>)
          }
          </div>
        </div>
      </div>
    );
};

export default Completed;