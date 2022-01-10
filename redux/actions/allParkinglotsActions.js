import { store } from "../store"

const updateAllParkinglots = (actionType, payload)=>{
    store.dispatch({
        type: actionType,
        payload: payload,
    });
}

export default updateAllParkinglots;