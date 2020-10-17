import {
  PRODUCT_LIST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_FAIL:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
