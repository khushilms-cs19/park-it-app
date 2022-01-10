import { bookingDetailsConstants } from "../actionTypes/bookingDetailsConstants"


const initialState = {
    location: "",
    time: ["7:15","7:45"],
    services: Array.from([]),
    parkingLocation: "",
    amount: 15.00,
}

const bookingDetailsReducer = (state = initialState, action)=>{
    switch(action.type){
        case bookingDetailsConstants.BOOKING_DETAILS_LOCATION:
            return {
                ...state, 
                location: action.payload,
            }
        case bookingDetailsConstants.BOOKING_DETAILS_TIME:
            return {
                ...state,
                time: action.payload,
            }
        case bookingDetailsConstants.BOOKING_DETAILS_SERVICES: 
            return {
                ...state,
                services: action.payload,
            }
        case bookingDetailsConstants.BOOKING_DETAILS_PARKINGLOCATION: 
            return {
                ...state,
                parkingLocation: action.payload,
            }
        case bookingDetailsConstants.BOOKING_DETAILS_AMOUNT: 
            return {
                ...state,
                amount: action.payload,
            }
        default: return state;
    }
}

export default bookingDetailsReducer;