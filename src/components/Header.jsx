import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate()
  const userData = useSelector((state)=>state.user)

  console.log(userData)

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('SignOut successful')
      navigate('/')
    }).catch((error) => {
      // An error happened.
      console.log('error from while signout',error?.message)
      navigate('/error')

    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img   
        className='w-44'
        src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
        alt='logo' 
        />
        {
          userData && (
            <div className='w-25 p-2 h-12  flex justify-between items-center cursor-pointer '>
                <div className='w-10 h-full'>
                      <img className='rounded' src= {userData?.photoURL} alt="User Profile" />
                </div>
                <button onClick={handleSignOut} className='bg-black rounded text-red-500 font-bold mx-2 w-full h-full px-2'>Sign Out</button>
            </div>
          )
        }
      
    </div>
  )
}

export default Header