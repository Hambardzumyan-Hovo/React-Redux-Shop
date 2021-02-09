const initialState = [];

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...state, action.item];
    }
    case "DELETE_ITEM": {
      return state.filter(item => item.id !== action.id);
    }
    default:
      return state;
  }
};

export const addItem = item => {
  return (dispatch, getState) => {
    const basket = getState().basket;

    if (basket.length > 0)
      if (basket.some(element => element.id === item.id)) {
        return null;
      } else dispatch({ type: "ADD_ITEM", item });
    else {
      dispatch({ type: "ADD_ITEM", item });
    }
  };
};

export const deleteItem = id => {
  return { type: "DELETE_ITEM", id };
};
export default basketReducer;
