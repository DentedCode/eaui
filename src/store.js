import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/category/categorySlice";
import productReducer from "./pages/product/productSlice";
import selectedProductReducer from "./pages/edit-product/selectedProductSlice";
import loginReducer from "./pages/login/loginSlice";

const store = configureStore({
	reducer: {
		category: categoryReducer,
		product: productReducer,
		selectedProduct: selectedProductReducer,
		login: loginReducer,
	},
});

export default store;
