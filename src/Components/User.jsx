import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUserRequest,getUserSuccess,getUserFailre } from '../redux/user/userActions'
import axios from 'axios'
const User = () => {
    const {users,loading,error} = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const getUsers = ()=>{
        dispatch(getUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>dispatch(getUserSuccess(res.data))).catch((err)=>dispatch(getUserFailre(err.message)))
    }
  return (
    <div>
      <h1>User Details</h1>
      <button onClick={()=>getUsers()}>{loading?"loading...":"get Users"}</button>
      {users && users.map((user)=>{
        return(
        <div key={user.id}>
        <h1>{user.name}</h1>
        <h2>{user.phone}</h2>
        </div>)
      })}
    </div>
  )
}

export default User
