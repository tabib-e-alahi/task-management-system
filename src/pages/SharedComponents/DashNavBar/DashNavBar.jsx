import useAuth from "../../../hooks/useAuth";
import DashDrawer from "./DashDrawer";

const DashNavBar = () => {
  const {user} = useAuth();

  return (
    <div className="navbar bg-base-300">
      
      <div className="flex-1 justify-center py-4 px-4">
      <h1 className="text-4xl  font-bold text-center text-[#B91C1C]">
        TaskBoard
      </h1>
      </div>
      <div className="flex-none">
        <DashDrawer></DashDrawer>
        <img className="ml-4 w-14 h-14 border border-red-600 rounded-full" src={user.photoURL} alt="" />
      </div>
    </div>
  );
};

export default DashNavBar;
