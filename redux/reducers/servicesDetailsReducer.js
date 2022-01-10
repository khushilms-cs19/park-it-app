import { servicesDetailsConstants } from "../actionTypes/servicesDetailsConstants";

const initialState = [];

const servicesDetailsReducers = (state = initialState, action)=>{
    switch(action.type){
        case servicesDetailsConstants.SERVICES_DETAILS_UPDATE_COMPLETE:
            return [
                ...action.payload,
            ];

        case servicesDetailsConstants.SERVICES_DETAILS_CLEAR_COMPLETE: 
            return [];

        default: return state;
    }
}

export default servicesDetailsReducers;