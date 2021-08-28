import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductAction";
import AllProducts from "./AllProducts";


const Home = () => {
  
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log("Products :", response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);  
  
  return (
    <>
      <AllProducts /> 
    </>
  )
}

export default Home
