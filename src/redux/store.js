import { createStore } from "redux";
import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCreams/iceCreamReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import  { logger } from "redux-logger";
import { applyMiddleware } from "redux";
import userReducer from "./user/userReducer";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store