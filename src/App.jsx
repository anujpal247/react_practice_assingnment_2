
import { useState } from 'react';
import './App.css'
import Counter from './Components/Counter';
import UserPage from './Components/UserPage';


function App() {
  const [flag, setFlag] = useState(false);
  
  return (
    <>
      {/* <UserPage /> */}
      {/* <Counter /> */}
      <div className='flex flex-col justify-center items-center mt-8'>

        <span onClick={() => setFlag(!flag)}
        className='text-lg font-bold cursor-pointer text-blue-400'>
          Go to {flag ? "Login" : "Counter"} Page
        </span>
        {flag ? <Counter /> : <UserPage />}
      </div>
    </>
  )
}

export default App
