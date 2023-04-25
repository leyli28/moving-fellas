import React from 'react'
import { Img4 } from '../../../assets/icons'
const Reliable = (props) => {
    return (

        <div id="open-modal" className="modal-window">
            <div className='modal-box'>
                <button title="Close" className="modal-close" onClick={props.handleClose}>x</button>
                <Img4 />
                <h1>Reliable Customer Support</h1>
                <div>We are reputable movers who understand quality moving services are not complete without reliable customer support.
                    That’s why we make it our prerogative to stay connected with you through the entirety of the moving process, serving you updates as needed and answering any last-minute questions. You only need look at how effusive our previous customers are about us to understand the kind of moving company we are!</div>

            </div>
        </div>

    )
}

export default Reliable