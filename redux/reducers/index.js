import { combineReducers } from "redux";
import allParkinglotsReducer from "./allParkinglotsReducer";
import bookingDetailsReducer from "./bookingDetailsReducer";
import parkingHistoryReducer from "./parkingHistoryReducer";
import parkinglotDetailsReducer from "./parkinglotDetailsReducer";
import servicesDetailsReducers from "./servicesDetailsReducer";
import userDataReducer from "./userDataReducer";

const rootReducer = combineReducers({
    userData: userDataReducer,
    bookingDetails: bookingDetailsReducer,
    servicesDetails: servicesDetailsReducers,
    parkinglotDetails: parkinglotDetailsReducer,
    parkingHistory: parkingHistoryReducer,
    allParkinglots: allParkinglotsReducer,
});

export default rootReducer;