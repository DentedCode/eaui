import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/category/categorySlice";
import productReducer from "./pages/product/productSlice";

const store = configureStore({
	reducer: {
		category: categoryReducer,
		product: productReducer,
	},
});

export default store;
