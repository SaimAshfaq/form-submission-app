// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../redux/formSlice";

const store = configureStore({
	reducer: {
		form: formReducer,
		// Add other slices or reducers here if needed
	},
});

export default store;
