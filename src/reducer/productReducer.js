const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "MY_API_PRODUCTS":
      return { ...state, products: action.payload, loading: false };
    case "API_ERROR":
      return { ...state, isError: action.payload, loading: false };
    default:
      return state;
  }
};

export default ProductReducer;
