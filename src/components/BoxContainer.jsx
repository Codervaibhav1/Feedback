import React from 'react'
import Myform from './Myform'
import TextPart from './TextPart'

const BoxContainer = () => {
  return (
    <div className='container my-5'>
    <div className='row'>
     <Myform/>
     <TextPart/>
    </div>
    </div>

  )
}

export default BoxContainer