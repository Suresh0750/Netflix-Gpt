import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { onAuthStateChanged, } from 'firebase/auth'
import { adduser, dispatchUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../utils/firebase'


const Body = () => {
    const dispatch = useDispatch()
   
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
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,displayName,email,photoURL} = user;

              dispatch(adduser({uid,displayName,email,photoURL}))
              // * we can't use navigater outside the provider component
            } else {
              // User is signed out
              dispatch(dispatchUser())

            }
          });
          
    },[])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body