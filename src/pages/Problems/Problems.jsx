import { useState } from "react";


const Problems = () => {
    const [hidden, setHidden] = useState(true);
    const handleToogleHiddenState = () =>{
        setHidden(!hidden)
    }
    console.log(hidden)
    return (
        <div className="flex flex-col gap-10">
            <h1>This is problem pages</h1>
            <button onClick={handleToogleHiddenState} className="bg-sky-800 px-4 py-2 rounded text-white">Add Problem <span className="text-red-600">(Only for tabib, do not click this button)</span></button>

            <textarea  className="w-2/3 p-4 h-96 mx-auto border border-red-700"></textarea>

        </div>
    );
};

export default Problems;