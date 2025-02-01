import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { adduser, dispatchUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'



const Body = () => {
  
    // * Used to whenever the auth is update it will trigger this.
    const dispatch = useDispatch()

    useEffect(()=>{

      const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,displayName,email,photoURL} = user; 
              dispatch(adduser({uid,displayName,email,photoURL})) // * update the store    
            } else {
              // User is signed out
              dispatch(dispatchUser()) //* dispatch the store
            } 
          });
      
        return ()=>unsubcribe()
  },[])
   
    const appRouter = createBrowserRouter([
        {
            path : '/',
            element : <Login/>
        },
        {
            path : '/browse',
            element : <Browse/>
        }
    ])
   
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body