import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setIsSignForm] = useState(true)

  const toggleSignInForm = ()=>{
    setIsSignForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
              src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" 
              alt="bg_img" 
              />
        </div>
        <form className='p-12 bg-black absolute w-1/4 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
            <h2 className='font-bold text-2xl py-2 my-2'>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            {
              !isSignInForm && <input 
              type='text' 
              placeholder='Full Name' 
              className='p-4 my-2 w-full bg-gray-700 rounded'
              /> 
            }
            <input 
              type='text' 
              placeholder='Email or phone number' 
              className='p-4 my-2 w-full bg-gray-700 rounded'
              />
            <input 
              type='password' 
              placeholder='Password' 
              className='p-4 my-2 w-full bg-gray-700 rounded'
              />
            <button className='p-4 my-6 bg-red-800 text-1xl w-full rounded'>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='text-white font-bold' >
            {isSignInForm ? "New to Neflix ?" : "Allready registered ?"}
               
              <span className='cursor-pointer mx-2' onClick={toggleSignInForm}>
              {isSignInForm ? "Sign Up Now" : "SigIn Now"}
                
              </span>
            </p>
        </form>
    </div>
  )
}


export default Login