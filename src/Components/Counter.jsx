import { useState } from "react";


function Counter(){

    const [val, setVal] = useState(0);

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="m-4 text-3xl font-semibold"><h1>Counter</h1></div>
            <div className="w-80 h-auto bg-pink-600 rounded-lg p-4">
               <div className="text-3xl font-bold flex justify-center items-center">
                 {val}
                </div> 
                <button onClick={() => setVal(val+1)}
                 className="w-32 bg-gray-300 p-4 text-lg mt-8 rounded hover:bg-gray-400">
                    Incment
                </button>
                <button onClick={() => val>0 && setVal(val-1)}
                 className="w-32 p-4 bg-gray-300 text-lg ml-6 rounded hover:bg-gray-400">
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;