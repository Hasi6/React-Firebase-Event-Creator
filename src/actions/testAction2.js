import { DECREMENT_COUNTER } from "../types/Types"

const testAction2 = ()=> dispatch =>{
    dispatch({
        type: DECREMENT_COUNTER
    })
}
export default testAction2