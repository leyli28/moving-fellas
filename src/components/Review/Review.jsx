
import { Img1, Img2, Img3, Img4, Mesh } from '../../assets/icons'
import './review.css'
import './reviewmedia.css'
import Slider from '../Slider/Slider';
import License from './License/License';
import { useState } from "react";
import Professionals from './Professionals/Professionals';
import Reliable from './Reliable/Reliable';
import Efficient from './Efficient/Efficient';




const Review = () => {

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const [isOpen2, setIsOpen2] = useState(false);
    const togglePopup2 = () => {
      setIsOpen2(!isOpen2);
    }

    const [isOpen3, setIsOpen3] = useState(false);
    const togglePopup3 = () => {
      setIsOpen3(!isOpen3);
    }

    const [isOpen4, setIsOpen4] = useState(false);
    const togglePopup4 = () => {
      setIsOpen4(!isOpen4);
    }


    return (
        <section className='darkSection' id='reviews'>
            <Mesh />
            <div className="container" >
                <h2>Why choose <br /> moving fellas?</h2>
                <div className="wrapper mt70" id='dark'>
                {isOpen && <License handleClose={togglePopup} />}
                    <div className="card">
                        <div className="cardGlass"></div>
                        <div className="cardHead">
                            <Img1 />
                            <h5>Licensed & Insured Company</h5>
                        </div>
                        <div className="cardBody">
                            <p>We’re a fully licensed and insured mover with a certificate of insurance that allows us to handle nationwide moves without constraints.</p>
                            <button className="btn mainBtn w100" onClick={togglePopup}>Read More</button>
                        </div>                      
                    </div>
                    {isOpen2 && <Professionals handleClose={togglePopup2} />}
                    <div className="card">
                        <div className="cardGlass"></div>
                        <div className="cardHead">
                            <Img2 />
                            <h5>Professionally Trained Movers</h5>
                        </div>
                        <div className="cardBody">
                            <p>The individual moving team members are the people you’ll interact with most on a one-on-one basis. That’s why our moving crew undergoes...</p>
                            <button className="btn mainBtn w100"  onClick={togglePopup2}>Read More</button>
                        </div>
                    </div>
                    {isOpen3 && <Efficient handleClose={togglePopup3} />}
                    <div className="card">
                        <div className="cardGlass"></div>
                        <div className="cardHead">
                            <Img3 />
                            <h5>Efficient Moving Crews</h5>
                        </div>
                        <div className="cardBody">
                            <p>With years upon years of experience between them, our moving crews are well-versed with moving best practices. And then some. Whether it’s a loc...</p>
                            <button className="btn mainBtn w100"  onClick={togglePopup3}>Read More</button>
                        </div>
                    </div>
                    {isOpen4 && <Reliable handleClose={togglePopup4} />}
                    <div className="card">
                        <div className="cardGlass"></div>
                        <div className="cardHead">
                            <Img4 />
                            <h5>Reliable Customer Support</h5>
                        </div>
                        <div className="cardBody">
                            <p>We are reputable movers who understand quality moving services are not complete without reliable customer support. That’s why we make...</p>
                            <button className="btn mainBtn w100"  onClick={togglePopup4}>Read More</button>
                        </div>
                    </div>

                </div>
            </div>
            <Slider />
        </section>
    )
}

export default Review