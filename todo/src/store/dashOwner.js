import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const getProperties = createAsyncThunk('dashOwner/getProperties',async(owner_id,ThunkAPI)=>{
        const {rejectWithValue} =ThunkAPI;
    try{
        const res=await fetch(`http://localhost:8080/homes/?owner_id=${owner_id}`);
        const data=await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const postProperties = createAsyncThunk('dashOwner/postProperties', async (data, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
  
    try {
      const res = await fetch('http://localhost:8080/homes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await res.json();
      if(responseData){
        alert('Congratulation you add new property !!!')
      }else{
        alert('Something went wrong!!!')
      }
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
  
  export const deleteProperties = createAsyncThunk('dashOwner/deleteProperties', async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    try{
        const res=await fetch(`http://localhost:8080/homes/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        }
        )
        const data=await res.json();
        
        if(data){
            alert('Congratulations you deleted this property !!!');
        }else{
            alert('Something went wrong !!!'); 
        }
        return data;

    }catch (error) {
        return rejectWithValue(error.message);
    }
  })
  
  export const updateProperties = createAsyncThunk('dashOwner/updateProperties', async (data, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const updateRes = await fetch(`http://localhost:8080/homes/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Send the data parameter in the request body
        });
        

        if(updateRes.ok){
            alert('Congratulations has been updated !!!');
        }else {
            // Handle non-OK response
            const errorData = await updateRes.json();
            return rejectWithValue(errorData.message);
        }

        return updateRes.json();

    } catch (error) {
        return rejectWithValue(error.message);
    }
});


const DashOwnerSlice = createSlice({
    name: 'dashOwner',
    initialState:{
        allOwnerProperties:[],
        rangePosts: [],
        isLoading: false,
        error: false,
        currentPage: 1,
        updateShow: false,
        postsPerPage: 9,
        firstPost: 1,
        lastPost: 9,
        isConfirmed:false,
        isConfirmedLogout: false,
        isDisplayedLogoutDialogue: false,
        isDisplayed: false,
        idDeletedProperty: 0,
    },
    reducers: {
        handleDisplayUpdateWindow: (state , action) => {
            state.updateShow = action.payload;
            
        },
        handleCurrentPage: (state, action) => {
            state.currentPage = action.payload;
            state.firstPost = (state.currentPage - 1) * state.postsPerPage + 1;
            state.lastPost = state.firstPost + state.postsPerPage;
        },
        handleRangePosts: (state, action) => {
            state.rangePosts = state.allOwnerProperties.slice(state.firstPost - 1, state.lastPost-1);
        },
        handleIsConfirmed: (state, action) => {
            state.isConfirmed = action.payload;
            if(state.isConfirmed){
                window.location.reload();
            }
        },
        handleIsDisplayed: (state, action) => {
            state.isDisplayed = action.payload;
        },
        handleIdDeletedProperty: (state, action) => {
            state.idDeletedProperty = action.payload;
            if(state.isConfirmed){
                window.location.reload();

            }
        },
        handleIsConfirmedLogout:(state, action) =>{
            state.isConfirmedLogout = action.payload;
        },
        handleIsDisplayedLogoutDialogue  :(state, action) =>{
            state.isDisplayedLogoutDialogue = action.payload;
        }
    },
    extraReducers:(builder)=>
        builder
            .addCase(getProperties.pending,(state,action)=>{
                state.isLoading = false;
                state.error = true;
            })
            .addCase(getProperties.fulfilled,(state,action)=>{
                state.allOwnerProperties=action.payload;
                state.rangePosts = action.payload.slice(state.firstPost - 1, state.lastPost-1);

                state.isLoading = true;            
            })
            .addCase(getProperties.rejected,(state,action)=>{
                state.isLoading = false;
                state.error = true;
            })
            .addCase(updateProperties.pending,(state,action)=>{
                state.isLoading = false;
                state.error = true;
            })
            .addCase(updateProperties.fulfilled,(state,action)=>{
                state.allOwnerProperties=action.payload;
                state.rangePosts = action.payload.slice(state.firstPost - 1, state.lastPost-1);

                state.isLoading = true;            
            })
            .addCase(updateProperties.rejected,(state,action)=>{
                state.isLoading = false;
                state.error = true;
            })
})

export const {
                handleDisplayUpdateWindow,
                handleCurrentPage,
                handleRangePosts,
                handleIsConfirmed,
                handleIsDisplayed,
                handleIdDeletedProperty,
                handleIsConfirmedLogout,
                handleIsDisplayedLogoutDialogue
            }=DashOwnerSlice.actions;
export default DashOwnerSlice.reducer;