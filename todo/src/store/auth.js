import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser=createAsyncThunk('auth/getUser',async (email,ThunkAPI)=>{
    const {rejectWithValue} = ThunkAPI;

    try{
        const response=await fetch(`http://localhost:8080/users?email=${email}`);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    }catch(err){
        return rejectWithValue(err.message);
    }
});

export const postUser=createAsyncThunk('auth/postUser',async (data,ThunkAPI)=>{
    const {rejectWithValue} = ThunkAPI;

    try{
        const response=await fetch(`http://localhost:3000/users`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        
        if(!response.ok){
            throw new Error(response.statusText);
        }

        return response.json();
    }catch(err){
        return rejectWithValue(err.message);
    }
});

export const getUserWithUID = createAsyncThunk('auth/getUserWithUID',async (uid,ThunkAPI)=>{
    const {rejectWithValue} = ThunkAPI;
    
    try{
        const response=await fetch(`http://localhost:8080/users?uid=${uid}`);
        

        if(!response.ok){
             throw new Error(response.statusText);
        }
        const data =await response.json();

        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: [], 
        userUID:[],
        isAuthenticated: false,
        isLoading: false,
        error: false
    },
    reducers: {
        handleIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        handleUserUID: (state,action) => {
            state.userUID = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload[0]; // Assuming the payload is an array, update user with the first element
                state.isAuthenticated = true;
            })
            .addCase(getUser.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = true;
            })
            .addCase(postUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload; // Update user directly if the payload structure matches your expected structure
                // state.isAuthenticated = true;
            })
            .addCase(postUser.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = true;
            })
            .addCase(getUserWithUID.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserWithUID.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userUID = action.payload[0]; 
            })
            .addCase(getUserWithUID.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = true;
            })
    }
})



export const  {
    handleUserUID,
    handleIsAuthenticated
}   =  authSlice.actions;

export default authSlice.reducer;