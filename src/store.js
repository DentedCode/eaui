import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/category/categorySlice";

const store = configureStore({
	reducer: {
		category: categoryReducer,
	},
});

export default store;
