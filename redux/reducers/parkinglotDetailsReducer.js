import { parkinglotDetailsConstants } from "../actionTypes/parkinglotDetailsConstants";

const initialState = {};

const parkinglotDetailsReducer = (state=initialState , action)=>{
    switch(action.type){
        case parkinglotDetailsConstants.PARKING_LOT_UPDATE_COMPLETE: 
            return {
                ...action.payload,
            }
        case parkinglotDetailsConstants.PARKING_LOT_CLEAR_COMPLETE:
            return {};
        default: return state;
    }
}

export default parkinglotDetailsReducer;