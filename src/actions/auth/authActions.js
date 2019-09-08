import { LOGIN_USER, SIGN_OUT_USER } from "../../types/Types";
import { closeModal } from "../modals/modalActions";

export const login = (cred)=> dispatch =>{
    dispatch ({
        type: LOGIN_USER,
        payload: cred
    })
    dispatch(closeModal())
}
export const signOut = () => dispatch =>{
    dispatch({
        type: SIGN_OUT_USER
    })
}