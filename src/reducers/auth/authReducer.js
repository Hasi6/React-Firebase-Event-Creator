import { createReducer } from "../../common/util/reducerUtil"
import { LOGIN_USER, SIGN_OUT_USER } from "../../types/Types"

const initialState = {
    authenticated: false,
    currentUser: null
}

const loginUser = (state, payload)=>{
    return {
        authenticated: true,
        currentUser: payload.email
    }
}

const signOutUser = (state)=>{
    return {
        authenticated: false,
        currentUser: null
    }
}

export default createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUser
})