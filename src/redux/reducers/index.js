import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./ProductReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
