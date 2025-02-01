import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase'
import {useSelector} from 'react-redux';
import {LOGO} from '../utils/constants.js'


const Header = () => {
  const navigate = useNavigate()
  const userData = useSelector((state)=>state.user)


  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      console.log('error from while signout',error?.message)
      navigate('/error')

    });


  }
  return (  
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between w-screen'>
        <img   
        className='w-44 z-10'
        src= {LOGO} 
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