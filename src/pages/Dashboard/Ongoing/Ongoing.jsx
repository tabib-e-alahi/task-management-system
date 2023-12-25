import { useDrop } from "react-dnd";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import OngoingTask from "./OngoingTask";
const Ongoing = ({ onTaskDrop }) => {
  const { user } = useAuth();
  const { email } = user;
  console.log(email);

  const [, drop] = useDrop({
    accept: "TODO",
    drop: (item) => {
      // Handle the drop event and update your tasks state
      console.log(item);
      onTaskDrop(item);
    },
  });
  const axiosPublic = useAxiosPublic();

  const { data: ongoingTasks = [], refetch } = useQuery({
    queryKey: ["ongoingTasks", email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/ongoingTasks?email=${email}&timestamp=${Date.now()}`
      );
      return res.data;
    },
  });

  console.log(ongoingTasks);
  return (
    <div ref={drop} className="bg-orange-100 p-4 rounded-md">
      <h1 className="flex justify-between items-center">
        <span className="text-orange-700 font-bold text-2xl">Ongoing</span>
      </h1>
      <hr className="mt-2 border-2 border-orange-700" />
      <div className="mt-4">
        <div className="grid grid-cols-1">
          {ongoingTasks.map((task) => (
            <OngoingTask
              key={task._id}
              task={task}
              refetch={refetch}
            ></OngoingTask>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
