import { userDataConstants } from "../actionTypes/userDataConstants";

const initialState = {
    _id: "",
    name:"",
    email: "",
    phone: "",
    token: "",
    balance: 0,
    history: [],
}

const userDataReducer = (state = initialState, action)=>{
    console.log(action.type, action.payload);
    switch(action.type){
        case userDataConstants.USER_DATA_UPDATE_COMPLETE: 
            return {
                ...state,
                ...action.payload,
            }
        case userDataConstants.USER_DATA_UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case userDataConstants.USER_DATA_UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload,
            }
        case userDataConstants.USER_DATA_UPDATE_TOKEN:
            return {
                ...state,
                token: action.payload,
            }
        case userDataConstants.USER_DATA_UPDATE_HISTORY: 
            return {
                ...state,
                history: action.payload,
            }
        default: return state;
    }
}

export default userDataReducer;