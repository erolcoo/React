import { createSlice } from '@reduxjs/toolkit';

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: [],
  reducers: {
    setDestinations: (state, action) => action.payload,
    addDestination: (state, action) => {
      state.push(action.payload);
    },
    updateDestination: (state, action) => {
      const index = state.findIndex(dest => dest.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteDestination: (state, action) => {
      return state.filter(dest => dest.id !== action.payload);
    },
  },
});

export const { setDestinations, addDestination, updateDestination, deleteDestination } = destinationsSlice.actions;

export default destinationsSlice.reducer;
