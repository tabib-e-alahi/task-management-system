import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Problems = () => {
  const axiosPublic = useAxiosPublic()

  const handleUpload = async(e) =>{
    e.preventDefault()
    const data = e.target.text_area.value;
    const newData = {
        text: data,
        time: new Date()
    }
    console.log(newData)

    const res =await axiosPublic.post('/yumm', newData)
    console.log(res)
  }


  return (
    <div className="flex flex-col gap-10">
      <h1>This is problem pages</h1>
      <button
        className="bg-sky-300 w-fit px-4 py-2 rounded text-white"
      >
        Add Problem{" "}
        <span className="text-red-600">
          (Only for tabib, do not click this button)
        </span>
      </button>

      <div className="grid grid-cols-4 gap-4 w-3/4 mx-auto border-2 border-blue-500 rounded p-4">
        <p className="bg-gray-400 px-2 py-4 text-black text-2xl">Problem 1</p>
        <p className="bg-gray-400 px-2 py-4 text-black text-2xl">Problem 1</p>
        <p className="bg-gray-400 px-2 py-4 text-black text-2xl">Problem 1</p>
        <p className="bg-gray-400 px-2 py-4 text-black text-2xl">Problem 1</p>
      </div>

      <form  className="w-2/3 border-2 border-red-700 p-6 mx-auto flex flex-col gap-10" onSubmit={handleUpload}>
     <div className="flex flex-col">
     <label className="text-2xl font-bold" htmlFor="">Title</label>
     <input className="w-2/3 py-4 px-2 border-2 border-black" name="topic" placeholder="Assignment title" type="text" />
     </div>
     <div className="flex flex-col">
     <label className="text-2xl font-bold" htmlFor="">Code: </label>
     <textarea name="text_area" className=" p-4 h-96 border border-red-700"></textarea>
     </div>
      
      <button className="bg-red-600 px-4 py-4 w-fit text-white mx-auto" type="submit">Submit</button>
      </form>

      

    </div>
  );
};

export default Problems;
