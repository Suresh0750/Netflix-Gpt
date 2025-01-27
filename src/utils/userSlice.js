import {createSlice} from '@reduxjs/toolkit'

// * user silce redux
const userSlice = createSlice({
    name : 'user',
    initialState : null,
    reducers : {
        adduser : (state,action)=>{
            return action.payload
        },
        dispatchUser : (state,action)=>{
            return null
        }
    }
})

export const {adduser,dispatchUser} = userSlice.actions
export default userSlice.reducer