import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getHome = createAsyncThunk('home/getHome', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch('http://localhost:8080/homes');
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getHomeDetails = createAsyncThunk('home/getHomeDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(`http://localhost:8080/homes/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    allHomes: [],
    isLoading: false,
    error: false,
    currentPage: 1,
    postsPerPage: 9,
    firstPost: 1,
    lastPost: 9,
    rangePosts: [],
    nbrPosts: 0,
    filterLocation:"",
    nbrFilterLocation:0,
    minPrice:0,
    maxPrice:100,
    homeDetails:[],
    filterRange:[],
    filterOn:false,
    filterTop:{
      location:'',
      type:'',
      size:''
    }
  },
  reducers: {
    handleCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.firstPost = (state.currentPage - 1) * state.postsPerPage + 1;
      state.lastPost = state.firstPost + state.postsPerPage;
    },
    handleRangePosts: (state, action) => {
      state.rangePosts = state.allHomes.slice(state.firstPost - 1, state.lastPost-1);
    },
    handleFilterON:(state,action) => {
      state.filterOn=action.payload;
      if(action.payload===false) {
        state.filterRange=[];
      }
    },
    handleFilterLocation: (state, action) => {
      state.filterLocation = action.payload;
    },
    handleNbrFilterLocation:(state,action) => {
      state.nbrFilterLocation = action.payload;
    },
    handleLocation: (state, action) => {
      state.filterTop.location = action.payload;
    },
    handleType: (state, action) => {
      state.filterTop.type = action.payload;
    },
    handleSize: (state, action) => {
      console.log(action.payload);
      state.filterTop.size = action.payload;
    },
    handleFilterRange:  (state, action) => {
      state.filterRange=action.payload;
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHome.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allHomes = action.payload;
        state.nbrPosts = action.payload.length;
        state.rangePosts = action.payload.slice(state.firstPost - 1, state.lastPost-1);
        state.filterRange = state.allHomes.filter((item) => {
          return (
            item.location ===  state.filterTop.location &&
            item.size     ===  state.filterTop.size.toString() &&
            item.type     ===  state.filterTop.type
          );
        });
      })
      .addCase(getHome.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      }) 
      .addCase(getHomeDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getHomeDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.homeDetails=action.payload;
      })
      .addCase(getHomeDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },

});

export const { 
    handleCurrentPage, 
    handleNbrFilterLocation,
    handleRangePosts,
    handleFilterLocation,
    handleFilterON,
    handleLocation,
    handleType,
    handleSize,
    handleFilterRange,
    handleRangeFilter
  } = homeSlice.actions;

export default homeSlice.reducer;






// import React from 'react'
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// export const getHome = createAsyncThunk('home/getHome',(async(_,thunkAPI)=>{
//     const {rejectWithValue} = thunkAPI;
//     try {
//         const res=await fetch('http://localhost:8080/api/home');
//         const data=await res.json();

//         return data;
//     } catch (error) {
//         return rejectWithValue(error.message);
//     }
// }))

// const homeSlice= createSlice({
//     name:'home',
//     initialState:{  
//                     allHomes:[]
//                     ,isloading:false
//                     ,error:false
//                     ,currentPage:1
//                     ,postsPerPage:9
//                     ,firstPost:1
//                     ,lastPost:9
//                     ,rangePosts:[]
//                     ,nbrPosts:0
//                 },
//     reducers:{
//         handleCurrentPage:(state,action)=>{
//             const currentPage=action.payload.currentPage;
//             const postsPerPage=state.postsPerPage;

//             state.currentPage = currentPage;
//             state.lastPost = currentPage*postsPerPage;
//             state.firstPost = currentPage*postsPerPage-postsPerPage+1; 
//             state.rangePosts.push(state.allHomes.slice(
//                 [state.firstPost, state.lastPost]
//             ))
//         },
//     },
//     extraReducers:{
//         [getHome.pending]:(state,action)=>{
//             console.log(action.payload);
//             state.isloading=true;

//         },
//         [getHome.fulfilled]:(state,action)=>{ 
//             console.log(action.payload);
//             state.isloading=false;
//             state.allHomes.push(action.payload);
//             state.rangePosts.push(state.allHomes.slice(state.firstPost-1,state.lastPost));
//             state.nbrPosts=state.allHomes.length;
//         },
//         [getHome.rejected]:(state,action)=>{
//             console.log(action.payload);
//             state.isloading=true;
//             state.error=true;
//         }
//     }
// })

// export const {handleCurrentPage} = homeSlice.actions;
// export default homeSlice.reducer;





// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const getHome = createAsyncThunk('home/getHome', async (_, thunkAPI) => {
//   const { rejectWithValue } = thunkAPI;
//   try {
//     const res = await fetch('http://http://localhost:8080/homes');
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// const initialState = {
//     allHomes: [],
//     isloading: false,
//     error: false,
//     currentPage: 1,
//     postsPerPage: 9,
//     firstPost: 1,
//     lastPost: 9,
//     rangePosts: [],
//     nbrPosts: 0,
// };

// const homeSlice = createSlice({
//   name: 'home',
//   initialState,
//   reducers: {
//     handleCurrentPage: (state, action) => {
//       const currentPage = action.payload;
//       const postsPerPage = state.postsPerPage;

//       state.currentPage = currentPage;
//       state.lastPost = currentPage * postsPerPage;
//       state.firstPost = currentPage * postsPerPage - postsPerPage + 1;
//       state.rangePosts.push(state.allHomes.slice(state.firstPost - 1, state.lastPost));
//     },
//   },
//   extraReducers: {
//     [getHome.pending]: (state, action) => {
//       state.isloading = true;
//     },
//     [getHome.fulfilled]: (state, action) => {
//       // state.isloading = false;
//       // state.allHomes.push(action.payload);
//       // console.log(action.payload)     
//       // state.rangePosts.push(state.allHomes.slice(state.firstPost - 1, state.lastPost));
//       // state.nbrPosts = state.allHomes.length;
//     },
//     [getHome.rejected]: (state, action) => {
//       state.isloading = true;
//       state.error = true;
//     },
//   },
// });

// export const { handleCurrentPage } = homeSlice.actions;
// export default homeSlice.reducer;
















// import React from 'react'
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// export const getHome = createAsyncThunk('home/getHome',(async(_,thunkAPI)=>{
//     const {rejectWithValue} = thunkAPI;
//     try {
//         const res=await fetch('http://localhost:8080/api/home');
//         const data=await res.json();

//         return data;
//     } catch (error) {
//         return rejectWithValue(error.message);
//     }
// }))

// const homeSlice= createSlice({
//     name:'home',
//     initialState:{  
//                     allHomes:[]
//                     ,isloading:false
//                     ,error:false
//                     ,currentPage:1
//                     ,postsPerPage:9
//                     ,firstPost:1
//                     ,lastPost:9
//                     ,rangePosts:[]
//                     ,nbrPosts:0
//                 },
//     reducers:{
//         handleCurrentPage:(state,action)=>{
//             const currentPage=action.payload.currentPage;
//             const postsPerPage=state.postsPerPage;

//             state.currentPage = currentPage;
//             state.lastPost = currentPage*postsPerPage;
//             state.firstPost = currentPage*postsPerPage-postsPerPage+1; 
//             state.rangePosts.push(state.allHomes.slice(
//                 [state.firstPost, state.lastPost]
//             ))
//         },
//     },
//     extraReducers:{
//         [getHome.pending]:(state,action)=>{
//             console.log(action.payload);
//             state.isloading=true;

//         },
//         [getHome.fulfilled]:(state,action)=>{ 
//             console.log(action.payload);
//             state.isloading=false;
//             state.allHomes.push(action.payload);
//             state.rangePosts.push(state.allHomes.slice(state.firstPost-1,state.lastPost));
//             state.nbrPosts=state.allHomes.length;
//         },
//         [getHome.rejected]:(state,action)=>{
//             console.log(action.payload);
//             state.isloading=true;
//             state.error=true;
//         }
//     }
// })

// export const {handleCurrentPage} = homeSlice.actions;
// export default homeSlice.reducer;
