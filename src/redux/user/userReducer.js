const initialState = {
    users:[],
    loading:false,
    error:""
}
const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GET_USER_REQUEST':return{
            ...state,
            loading:true
        }

        case 'GET_USER_SUCCESSS':return {
            ...state,
            users:action.payload,
            loading:false,
            error:""
        }
        case 'GET_USER_FAILURE':return {
            ...state,
            users:[],
            loading:false,
            error:action.payload
        }
        default:return state
    }
}

export default userReducer