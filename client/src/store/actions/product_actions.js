import {
  PRODUCT_LIST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";

export const listProducts = () => async (dispath) => {
  try {
    dispath({ type: PRODUCT_LIST });
    const { data } = await axios.get("/api/products");

    dispath({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispath({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.message
          : error.message,
    });
  }
};
