import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

export const AppContext = createContext('');


const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  cartData:[]
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(process.env.REACT_APP_API_URL);
  }, []);

  return (
    <AppContext.Provider value={{state,dispatch }}>{children}</AppContext.Provider>
  );
};

// custom hooks

export default AppProvider