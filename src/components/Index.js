import React from 'react'
import { increaseValue,decreaseValue } from '../redux/action-creator';
import { useSelector,useDispatch } from 'react-redux'; 

const Index = () => {
  const myState=useSelector(state=>state.ourstate.count);
  const increase=()=>dispatch(increaseValue())
  const decrease=()=>dispatch(decreaseValue())
  console.log("myState===>>",myState);
const dispatch=useDispatch();
  return (
    <div>
      <h2>Hello</h2>
      <button style={{color:"white",backgroundColor:"blue", fontSize:"30px"}} onClick={increase}>increment</button>
      <p>{myState}</p>
      <button style={{color:"white", backgroundColor:"red" ,fontSize:"30px"}} onClick={decrease}>decrement</button>
    </div>
  )   
}

export default Index;