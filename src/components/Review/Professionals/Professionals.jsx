import React from 'react'
import { Img2 } from '../../../assets/icons'
const Professionals = (props) => {
    return (

        <div id="open-modal" className="modal-window">
            <div className='modal-box'>
                <button title="Close" className="modal-close" onClick={props.handleClose}>x</button>
                <Img2 />
                <h1>Professionally Trained Movers</h1>
                <div>The individual moving team members are the people you’ll interact with most on a one-on-one basis. That’s why our moving crew undergoes one of the best training programs for professional movers anywhere, focusing as much on expertise as it does on soft skills.
                    This means your belongings will be in the safest hands, and the professional camaraderie will leave a good impression on you.</div>

            </div>
        </div>

    )
}

export default Professionals