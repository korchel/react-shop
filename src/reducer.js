const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_GOODS":
      return { ...state, goods: payload || [], loading: false };
    case "ADD_TO_CART": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = { ...payload, quantity: 1 };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) =>
          index === itemIndex
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      }
      return { ...state, order: newOrder, alertName: payload.name };
    }
    case "REMOVE_FROM_CART":
      const newOrder = state.order.filter((item) => item.id !== payload);
      return { ...state, order: newOrder };
    case "INCREASE_QUANTITY": {
      const newOrder = state.order.map((item) =>
        item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { ...state, order: newOrder };
    }
    case "DECREASE_QUANTITY": {
      const newOrder = state.order.map((item) =>
        item.id === payload
          ? { ...item, quantity: (item.quantity = 0 ? item.quantity - 1 : 0) }
          : item
      );
      return { ...state, order: newOrder };
    }
    case "CLOSE_ALERT":
      return { ...state, alertName: "" };
    case "TOGGLE_CART_VISIBILITY":
      return { ...state, isCartVisible: !state.isCartVisible };
    default:
      return state;
  }
};

export default reducer;
