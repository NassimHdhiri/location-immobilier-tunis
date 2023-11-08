import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPropertyDetails = createAsyncThunk('detailsProperty/getPropertyDetails',async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const response = await fetch(`http://localhost:8080/homes/${id}`);
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateProperties = createAsyncThunk(
  'detailsProperty/updateProperties',
  async (dataPut, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const response = await fetch(`http://localhost:8080/homes/${dataPut.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataPut),
      });
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getUser = createAsyncThunk('detailsProperty/getUser', async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI;
  try {
    const response = await fetch(`http://localhost:8080/users/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});

export const updateUser = createAsyncThunk('detailsProperty/updateUser', async (dataPut, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI;
  try {
    const response = await fetch(`http://localhost:8080/users/${dataPut.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPut),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
}
); 

const DetailsPropertySlice = createSlice({
  name: 'detailsProperty',
  initialState: {
    displayPhone: false,
    PropertyDetails: [],
    userId: 1,
    isLoading: false,
    error: false,
    userDetails: [],
    isLoadingUser: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPropertyDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPropertyDetails.fulfilled, (state, action) => {
        state.PropertyDetails = action.payload;
        state.userId=action.payload.owner_id;
        state.isLoading = false;
      })
      .addCase(getPropertyDetails.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.isLoadingUser = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingUser = false;
      })
      .addCase(updateProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProperties.fulfilled, (state, action) => {
        state.PropertyDetails = action.payload;
        state.isLoading = false;
      })
      .addCase(updateProperties.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        alert("Congratulations your information updated successfully !!!");
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      
  },
  reducers: {
    handleDisplayPhone: (state, action) => {
      state.displayPhone = action.payload;
    },
    setUser_id: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { handleDisplayPhone, setUser_id } = DetailsPropertySlice.actions;
export default DetailsPropertySlice.reducer;
