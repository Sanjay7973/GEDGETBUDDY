import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

// create context
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

// initialstate of usereducer hook
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // create function for get api data
  const getProducts = async (url) => {
    // using dispatch function for loading process
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      // using dispatch function for product data
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      // using dispatch function for error
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api calling for single product
  const getSinglePoduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "MY_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "API_SINGLE_PRODUCT_ERROR" });
    }
  };

  // calling getproducts function in useeffect hook for getting api data when page load first time
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    // providing data to index component throw contextpi
    <AppContext.Provider value={{ ...state, getSinglePoduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook for useContext
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext};
