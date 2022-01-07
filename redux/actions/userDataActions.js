import { userDataConstants } from "../actionTypes/userDataConstants";
import userDataReducer from "../reducers/userDataReducer";
import { store } from "../store";

const updateUserData = (actionType, payload)=>{
    store.dispatch({
        type: actionType,
        payload: payload,
    });
}
export default updateUserData;