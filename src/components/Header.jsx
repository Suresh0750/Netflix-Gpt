import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase'
import {useDispatch, useSelector} from 'react-redux';
import {LOGO} from '../utils/constants.js'
import {toggleGptSearchView} from '../utils/gptSlice.js'
import {SUPPORTED_LANGUAGES} from '../utils/constants.js'
import {changeLanguage} from '../utils/configSlice.js'
import { Menu, X } from "lucide-react"


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state)=>state.user)
  const showGptSearch  = useSelector((store)=>store.gpt?.showGptSearch)
  const dispatch = useDispatch()
  const [isOpen,setIsOpen] = useState(false)

  const handleGptSearchClick = ()=>{
    // handle the serach login
    dispatch(toggleGptSearchView())   

  }

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


  const handleLanguageChange = (e)=>{
    // * handle show language login
    dispatch(changeLanguage(e?.target?.value))
  }



  return (  
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex flex-col md:flex-row justify-between sm:bg-blue-700 md:bg-green-600 lg:bg-black">
    <img className="w-44 mx-auto z-10 md:mx-0" src={LOGO} alt="logo" />
    {user && (
      <>
        <div className='md:hidden m-0 absolute top-8'>
            <button className='bg-white rounded' onClick={()=>setIsOpen((state)=>!state)}>
              {isOpen ?  <X size={24} /> : <Menu size={24} /> }
            </button>
        </div>
        <div className={` ${!isOpen ? "hidden md:flex" : 'flex p-5 rounded justify-between bg-black opacity-90 flex-col md:flex md:flex-row'} `}>
          {
              <select className='p-2 cursor-pointer bg-gray-900 text-white' onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANGUAGES?.map((lang,i)=>{
                  return <option className='cursor-pointer' key={i} value={lang?.identifier}>{lang?.name}</option>
                  })
                }
              </select>
            }
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
            onClick={handleGptSearchClick}
          >
            GPTSearch
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      </>
    )}
  </div>
  )
}

export default Header