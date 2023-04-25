import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar1, Avatar2, Avatar3, Avatar4 } from '../../assets/icons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {


    // const [mousePosition, setMousePosition] = useState({
    //     x: 0,
    //     y: 0
    // });


    // const [isShown, setIsShown] = useState(false);

    // useEffect(() => {
    //     const mouseMove = (e) => {
    //         setMousePosition({
    //             x: e.clientX,
    //             y: e.clientY
    //         })
    //     }

    //     window.addEventListener("mousemove", mouseMove);

    //     return () => {
    //         window.removeEventListener("mousemove", mouseMove)
    //     }

    // }, []);


    // const variants = {
    //     default: {
    //         x: mousePosition.x - 60,
    //         y: mousePosition.y - 60,

    //     }

    // }

    // const textEnter = () => setIsShown(current => !current);
    // const textLeave = () => setIsShown(current => !current);



    const settings = {
        arrows: false,
        slidesToShow: 2,

        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,

                }
            }]
    }

    return (
        <div className='container mt150 z2 ' id='sliding'>
            <div className="wrapper">
                <div className="sliderSection">
                    <div className='sliderleftSide' >
                        <h2>What Moving fellas <br /> customers say?</h2>
                    </div>
                    <div className="sliderRightside">
                        {/* <motion.div style={{ display: isShown ? 'block' : 'none' }} className="cursor" variants={variants} animate="default" /> */}
                        <Slider {...settings}>
                            <div className='sliderCard'>
                                <Avatar1 />
                                <h3>Teressa G.</h3>
                                <p>The movers were fast, professional, nice, friendly I couldn't have asked for it to go any other way thank you </p>

                            </div>
                            <div className='sliderCard'>
                                <Avatar2 />
                                <h3>Marcos Padron</h3>
                                <p>Moving can be a notoriously stressful and daunting experience, but luckily Moving Fellas was there to make the process effortless! Hard working, personable and careful with our things.</p>

                            </div>
                            <div className='sliderCard'>
                                <Avatar3 />
                                <h3>Paul Danes</h3>
                                <p>I had a very pleasant moving experience with Moving Fellas. They were on time and the move was easy. I have used this company several times and would recommend!</p>

                            </div>
                            <div className='sliderCard'>
                                <Avatar4 />
                                <h3>Jennifer B.</h3>
                                <p>I was really impressed with this moving company, from beginning to end. Outstanding job. I've used their services twice in the past year. Highly recommend.</p>
                            </div>

                        </Slider>
                    </div>
                </div>

            </div>

        </div>








    )
}

export default Slides