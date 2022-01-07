import { combineReducers } from "redux";
import bookingDetailsReducer from "./bookingDetailsReducer";
import userDataReducer from "./userDataReducer";

const rootReducer = combineReducers({
    userData: userDataReducer,
    bookingDetails: bookingDetailsReducer,
});

export default rootReducer;