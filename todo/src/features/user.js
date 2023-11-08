import { createSlice } from "@reduxjs/toolkit";


export const userSlice=createSlice(
    {
        name:"user",
        initialState:{value:{name:"",tel:0,email:"email@email.com"}},
        reducers:{
            display:(state,action)=>{
                state.value=action.payload;
            },
            remove:(state)=>{  
                state.value={name:"",tel:0,email:"email@gmail.com"}
            }
        }
}
)
export const {display,remove}=userSlice.actions;

export default userSlice.reducer;  

