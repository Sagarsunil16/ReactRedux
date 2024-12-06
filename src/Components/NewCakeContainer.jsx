import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import { buyCake } from '../redux/cakes/cakeAction'
const NewCakeContainer = () => {
    const dispatch = useDispatch()
    const cakes = useSelector((state)=>state.cake.numOfCakes)
    const [number,setNumber] = useState(1)
  return (
    <div>
      <h1>Number of cakes:{cakes}</h1>
      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>{dispatch(buyCake(number))}}>Buy {number} cake</button>
    </div>
  )
}

export default NewCakeContainer
