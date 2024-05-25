import { useState } from "react";


function UserPage(){

    const [isLogIn, setIsLogIn] = useState(false);

    return(
        <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-80 h-auto border border-gray-400 rounded p-8 space-y-2'>

          <img src="./src/assets/instagram.png" alt="img" />

          <input type="text" placeholder='Mobile Number or Email' hidden={isLogIn}
          className='w-full border border-gray-500 rounded px-4 py-2'/>

          <input type="text" placeholder='FullName' hidden={isLogIn}
          className='w-full border border-gray-500 rounded px-4 py-2'/> 

          <input type="text" placeholder='UserName'
          className='w-full border border-gray-500 rounded px-4 py-2'/> 

          <input type="password" placeholder='Password'
          className='w-full border border-gray-500 rounded px-4 py-2'/>

          <button className='w-full bg-blue-400 py-2 rounded-lg text-white hover:bg-blue-500'>
            {isLogIn? "Sign In" : "Sign Up"}
          </button>

          <div className='flex justify-center items-center'>
            {isLogIn? "Don't have account? " : "have an account? "}
            <span onClick={() => setIsLogIn(!isLogIn)} className='text-sm text-blue-300 cursor-pointer'>
              {isLogIn? " Sign Up" : " Sign In"}
            </span>
          </div>
      </div>
    </div>
    );
}

export default UserPage;