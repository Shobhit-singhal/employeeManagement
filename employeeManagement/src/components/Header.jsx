import React from 'react'
import { useUserContext } from '../context/UserProvider'

const Header = () => {
  const {setUser,setUserDetails,userDetails}=useUserContext();
  const handleClick=()=>{
    setUser('');
    setUserDetails('');
  }
  return (
    <div className='flex justify-between items-center bg-red-400 px-5 py-3'>
      <div className='flex flex-col items-start justify-start'>
        <h3>Hello,</h3>
        <h2 className='font-bold text-lg'>{userDetails.firstName}🙌</h2>
      </div>
      <div>
        <button
        className='bg-blue-500 px-3 py-2 rounded-md cursor-pointer '
        onClick={handleClick}
        >
            Logout
        </button>
      </div>
    </div>
  )
}

export default Header
