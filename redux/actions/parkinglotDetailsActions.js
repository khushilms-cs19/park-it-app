import { store } from "../store"

const updateParkinglotDetails = (actionType, payload)=>{
    store.dispatch({
        type: actionType,
        payload: payload,
    })
}
export default updateParkinglotDetails;