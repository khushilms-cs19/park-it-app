import { parkingHistoryConstants } from "../actionTypes/parkingHistoryConstants";

const initialState = [];

const parkingHistoryReducer = (state = initialState, action)=>{
    switch(action.type){
        case parkingHistoryConstants.PARKING_HISTORY_UPDATE_COMPLETE:
            return [
                ...action.payload,
            ];
        case parkingHistoryConstants.PARKING_HISTORY_CLEAR_COMPLETE:
            return [];
        default: return state;
    }
}

export default parkingHistoryReducer;