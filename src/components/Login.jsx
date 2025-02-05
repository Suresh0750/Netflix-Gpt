import React, { useEffect, useRef, useState } from 'react'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js'
import Header from './Header'
import {checkValidData} from '../utils/validate.js'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {BG_URL, USER_AVATAR} from '../utils/constants.js'

const Login = () => {

  const [isSignInForm,setIsSignForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const navigate = useNavigate()
  const userData = useSelector((state)=>state?.user)

  useEffect(()=>{
    if(userData){
      navigate('/browse')
    }else{
      navigate('/')
    }
  },[userData,navigate])

  const handleButtonClick = (e)=>{
    e.preventDefault()
    const data = {
      isSignInForm,
      name : name.current?.value,
      email : email.current?.value,
      password : password.current?.value
    }
    const message = checkValidData(data)
    setErrorMessage(message)
    if(message) return

    if(!isSignInForm){
      // * sign up logic
      createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current?.value, photoURL:USER_AVATAR,
                }).then(() => { // * onAuthStateChanged will take care of it
                }).catch((error) => {
                  console.log(error?.message);
                });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+'-'+errorMessage)
              });

    }else{
      // * sign in logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value) .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/browse')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+'-'+errorMessage)
      });
    }
  }

  const toggleSignInForm = ()=>{
    setIsSignForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div className='absolute bg-gradient-to-b from-black'>
            <img 
              className=''
              src={BG_URL }
              alt="bg_img" 
              />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='p-12 bg-black absolute w-1/4 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
            <h2 className='font-bold text-2xl py-2 my-2'>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            {
              !isSignInForm && <input 
              ref={name}
              type='text' 
              placeholder='Full Name' 
              className='p-4 my-2 w-full bg-gray-700 rounded'
              /> 
            }
            <input 
              ref={email}
              type='text' 
              placeholder='Email or phone number' 
              className='p-4 my-2 w-full bg-gray-700 rounded'
              />
            <input 
              ref={password}
              type='password' 
              placeholder='Password' 
              className='p-4 my-2 w-full bg-gray-700 rounded'
              />
            {
              <p className='text-red-600 font-bold text-lg py-4'>
                {errorMessage}
              </p>
            }
            <button className='p-4 my-6 bg-red-800 text-1xl w-full rounded' onClick={handleButtonClick}>
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