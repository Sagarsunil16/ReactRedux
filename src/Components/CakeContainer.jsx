import React from 'react'
import  {connect} from 'react-redux'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'
const CakeContainer = (props) => {

  return (
    <div>
      <h1>Toal Number of Cakes {props.numOfCakes}</h1>
      <button onClick={()=>props.buyCake()}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    buyCake:()=>dispatch(buyCake())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
