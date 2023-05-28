import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  alertName: "",
  isCartVisible: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  value.addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  value.increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  value.decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  value.toggleCartVisibility = () => {
    dispatch({ type: "TOGGLE_CART_VISIBILITY" });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
