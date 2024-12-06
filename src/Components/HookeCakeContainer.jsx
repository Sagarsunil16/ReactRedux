import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'
const HookeCakeContainer = () => {
    const cakes = useSelector((state)=>state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Total Number of Cakes: {cakes}</h2>
      <button onClick={()=>(dispatch(buyCake()))}>Buy cake</button>
    </div>
  )
}

export default HookeCakeContainer
