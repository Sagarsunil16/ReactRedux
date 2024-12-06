import { BUY_ICE_CREAM } from "./iceCreamType"

const inititalState = {
    numOfIceCreams:20
}
const iceCreamReducer = (state=inititalState,action)=>{
        switch(action.type){
            case BUY_ICE_CREAM:return {
                ...state,
                numOfIceCreams:state.numOfIceCreams-1
            }
            default :return state
        } 
}

export default iceCreamReducer