import React from 'react'
import { Img1 } from '../../../assets/icons'

const License = (props) => {
    return (
    
            <div id="open-modal" className="modal-window">
                <div className='modal-box'>
                    <button title="Close" className="modal-close"  onClick={props.handleClose}>x</button>
                    <Img1 />
                    <h1>Licensed & Insured Company</h1>
                    <div>Moving Fellas is a fully licensed and insured mover with a certificate of insurance that allows us to handle nationwide moves without constraints.
                        We are keen to build trust with our customers. That’s why our credentials are in the public domain for everyone to see.
                        Our Insurance information is: MC: 30996 | USDOT: 3014539 | NYSDOT: T-40118.</div>

                </div>
            </div>
   
    )
}

export default License