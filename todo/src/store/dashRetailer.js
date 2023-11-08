import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {handleUserUID} from './auth'

export const getFavorites=createAsyncThunk('dashRetailer/getFavorites',async(id,ThunkAPI)=>{
    
    const {rejectWithValue}=ThunkAPI;

    try{
        const res=await fetch(`http://localhost:8080/users/${id}`);
        
        if(!res.ok){
            return null;
        }
        const data = await res.json();
        
        return data.favoriteHouses;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const getFavProperties=createAsyncThunk('dashRetailer/getFavProperties',async(array,ThunkAPI)=>{
    
    const {rejectWithValue}=ThunkAPI;

    try{
        const url = `http://localhost:8080/homes?id=${array[0]}`;

        const filteredIds = array
        .filter((id, index) => index !== 0)
        .map(id => `&id=${id}`)
        .join('');

        const finalUrl = url + filteredIds;
       
        const res=await fetch(finalUrl);
        
        if(!res.ok){
            return null;
        }
        const data = await res.json();

        return data;
    }catch(error){
        return rejectWithValue(error.message+'finalUrl');
    }
});

export const putUserAddFav = createAsyncThunk(
    'dashRetailer/putUserAddFav',
    async ({ id, requestBody }, { rejectWithValue, dispatch }) => {
      try {
        const res = await fetch(`http://localhost:8080/users/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(requestBody), 
        });
  
        if (res.ok) {
          const data = await res.json();
          dispatch(handleUserUID(data));
          return data;
        } else {
          const errorData = await res.json();
          return rejectWithValue(errorData);
        }
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


const dashRetailer=createSlice({
    name: 'dashRetailer',
    initialState:{
        userFavorites:[],
        favProperties:[],
        isLoading:false,
        error:null
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getFavorites.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(getFavorites.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload === null) {
                state.error = "Failed to fetch favorites";
            } else {
                state.userFavorites = action.payload;
            }
        })
        .addCase(getFavorites.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
        })
        .addCase(getFavProperties.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(getFavProperties.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload === null) {
                state.error = "Failed to fetch favorite properties";
            } else {
                state.favProperties = action.payload;
            }
        })
        .addCase(getFavProperties.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
        })
        .addCase(putUserAddFav.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(putUserAddFav.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload === null) {
                state.error = "Failed to fetch favorite properties";
            } else {
                state.favProperties = action.payload;
            }
        })
        .addCase(putUserAddFav.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
        })
    }
})


export const {} = dashRetailer.actions;
export default dashRetailer.reducer;