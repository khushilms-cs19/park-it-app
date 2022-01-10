import { allParkingLotsConstants } from "../actionTypes/allParkingLotsConstants";

const initialState = [];
const allParkinglotsReducer = (state = initialState, action)=>{
    switch(action.type){
        case allParkingLotsConstants.ALL_PARKING_LOTS_UPDATE_COMPLETE:
            return [
                ...action.payload,
            ];
        case allParkingLotsConstants.ALL_PARKING_LOTS_CLEAR_COMPLETE:
            return [];
        default: return state;
    }
}
export default allParkinglotsReducer;