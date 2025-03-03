// * application level config slice. Here we can use application level data managment
import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name : 'appConfigurations',
    initialState : {
        lang : 'en'
    },
    reducers : {
        changeLanguage : (state,action)=>{
            state.lang = action.payload
        }
    }
})


export const {changeLanguage} = configSlice.actions
export default configSlice.reducer