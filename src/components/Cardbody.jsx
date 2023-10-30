import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editFeedback, remove } from '../features/slice/feedbackSlice';
const Cardbody = ({item}) => {
const{edit}  = useSelector(state => state.feedback)

console.log(item)
  const dispatch = useDispatch()
  const handleDelete = (id)=>{
    dispatch(remove(id))
  }
  const handleEdit=(item)=>{
    dispatch(editFeedback(item))
  }

  return (
    <div className='d-flex justify-content-center my-5'>
      <div className="card w-50 shadow border border-none p-3">
  <div className="card-body">
    <h2>Rating :- {item.rating}</h2>
    <h2>Review :- {item.review}</h2>
    <button className="btn btn-danger rounded-0 float-end" onClick={()=>handleDelete(item.id)} >Delete</button>
    <button className="btn btn-warning rounded-0 float-end" onClick={()=>handleEdit(item)}>Update</button>
    </div>
    </div>
    </div>
  )
}

export default Cardbody;