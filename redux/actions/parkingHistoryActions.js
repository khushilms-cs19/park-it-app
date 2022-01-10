import { store } from "../store"

const updateParkingHistory = (actionType, payload)=>{
    store.dispatch({
        type: actionType,
        payload: payload,
    })
}

export default updateParkingHistory;