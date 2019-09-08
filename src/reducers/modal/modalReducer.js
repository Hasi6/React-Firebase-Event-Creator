import {createReducer} from '../../common/util/reducerUtil';
import { MODAL_OPEN, MODAL_CLOSE } from '../../types/Types';
const initialState = null;

const openModel = (state,payload)=>{
    const {modalType, modalProps}=payload;
    return {modalType, modalProps}
}
const closeModal = (state)=>{
    return null
}

export default createReducer(initialState, {
    [MODAL_OPEN]: openModel,
    [MODAL_CLOSE]: closeModal
})