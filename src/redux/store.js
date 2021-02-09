import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import basketReducer from "./basketReducer";
import productsReducer from "./productsReducer";

const reducers = combineReducers({
  basket: basketReducer,
  products: productsReducer,
});

const loadState = () => {
  try {
    const localState = localStorage.getItem("state");
    if (!localState) {
      return undefined;
    } else {
      return JSON.parse(localState);
    }
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const localState = JSON.stringify(state);
    localStorage.setItem("state", localState);
  } catch (err) {
    console.log(err);
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, loadState(), composeEnhancers(applyMiddleware(thunk)));
store.subscribe(() => {
  saveState(store.getState());
});
export default store;
