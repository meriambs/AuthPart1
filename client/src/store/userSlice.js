import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'
// ici cest la partie mt" les accounts des utlistaurs 


const userSlice = createSlice({
    name:'user',
    initialState:[
        {
            id:uuidv4(),
            name:"meriam utilistauer 1 ",
            age:28,
            email:"bensalah@gmail.com"
        }
    ],
    reducers:{
        //bich njibou el lista kemla mil backend donc n7otoha fil front  
//nrj3ou ely bich yjina el kolla ley howa biensure jeyna mil backend 
setContacts:(state,action)=>{
    return action.payload;
}

    }
})

export const {setContacts} = userSlice.actions

export default userSlice.reducer