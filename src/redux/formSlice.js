// formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
	name: "form",
	initialState: {},
	reducers: {
		updateFormData: (state, action) => {
			return { ...state, ...action.payload };
		},
		saveFormData: (state, action) => {
			state.formData = action.payload;
		},
	},
});

export const { updateFormData, saveFormData } = formSlice.actions;
export default formSlice.reducer;
