import { configureStore } from "@reduxjs/toolkit";
import destinationsReducer from "./destinationsSlice"; 

const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
  },
});

export default store;