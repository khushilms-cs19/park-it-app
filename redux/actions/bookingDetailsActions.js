import { store } from "../store"

const updateBookingDetails = (actionType , payload)=>{
    store.dispatch({
        type: actionType,
        payload: payload,
    });
    console.log(store.getState());
}
export default updateBookingDetails;