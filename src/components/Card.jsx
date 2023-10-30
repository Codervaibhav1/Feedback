
import React from 'react'
import Cardbody from './Cardbody';
import { useSelector } from 'react-redux';
import feedbackSlice from '../features/slice/feedbackSlice';


const Card = () => {

  const {feedback} = useSelector(state => state.feedback);
// console.log(feedback)
  return (
<div>
{
      feedback.map(item =>  <Cardbody key={item.id} item={item}/>)
    }
</div>

   
  )
}

export default Card;