import { userDataConstants } from "../actionTypes/userDataConstants";

const initialState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phno: "",
    token: "",
}

const userDataReducer = (state = initialState, action)=>{
    console.log(action.type, action.payload);
    switch(action.type){
        case userDataConstants.USER_DATA_UPDATE_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload,
            }
        case userDataConstants.USER_DATA_UPDATE_LAST_NAME:
            return {
                ...state,
                lastName: action.payload,
            }
        case userDataConstants.USER_DATA_UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload,
            }
        default: return state;
    }
}

export default userDataReducer;