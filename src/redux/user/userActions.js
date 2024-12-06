export const getUserRequest = ()=>{
    return {
        type:'GET_USER_REQUEST'
    }
}

export const getUserSuccess = (users)=>{
    return {
        type:'GET_USER_SUCCESSS',
        payload:users
    }
}

export const getUserFailre = (error)=>{
    return {
        type:'GET_USER_FAILURE',
        payload:error
    }
}