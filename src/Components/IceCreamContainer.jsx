import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/iceCreams/iceCreamActons'
const IceCreamContainer = () => {
    const iceCream = useSelector((state)=>state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of IceCreams: {iceCream}</h1>
      <button onClick={()=>{dispatch(buyIceCream())}}>Buy IceCream</button>
    </div>
  )
}

export default IceCreamContainer
