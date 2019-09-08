import { LOGIN_USER, SIGN_OUT_USER } from "../../types/Types";

export const login = (cred)=> dispatch =>{
    dispatch ({
        type: LOGIN_USER,
        payload: cred
    })
}
export const signOut = () => dispatch =>{
    dispatch({
        type: SIGN_OUT_USER
    })
}