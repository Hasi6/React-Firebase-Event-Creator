import { SIGN_OUT_USER } from "../../types/Types";
import { closeModal } from "../modals/modalActions";

export const login = (cred)=> async (dispatch, getState, {getFirebase}) =>{
    const firebase = getFirebase();
    try {
        await firebase.auth().signInWithEmailAndPassword(cred.email, cred.password)
        dispatch(closeModal())
    } catch (err) {
        console.error(err.message);
    }
    
}
export const signOut = () => dispatch =>{
    dispatch({
        type: SIGN_OUT_USER
    })
}