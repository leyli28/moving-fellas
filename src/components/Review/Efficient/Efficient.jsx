import React from 'react'
import { Img3 } from '../../../assets/icons'
const Efficient = (props) => {
  return (

    <div id="open-modal" className="modal-window">
    <div className='modal-box'>
        <button title="Close" className="modal-close"  onClick={props.handleClose}>x</button>
        <Img3 />
        <h1>Efficient Moving Crews</h1>
        <div>With years upon years of experience between them, our moving crews are well-versed with moving best practices. And then some.
Whether it’s a local move or long-distance, residential or office, piano or fine art moving, we will get your items to the destination efficiently – on time, with kid-glove treatment, and in a manner designed to reduce your moving services cost without compromising on the job.</div>

    </div>
</div>

  )
}

export default Efficient