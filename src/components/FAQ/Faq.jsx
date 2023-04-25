import { Bag2, Calendar2, FaqImg, Like2 } from '../../assets/icons'
import './faq.css'
import './faqmedia.css'

const Faq = () => {
    return (
        <section className="faqSection" id='faq'>
            <div className="container">
                <div className="meshShape2"></div>
                <div className="wrapper alignCenter">
                    <div className="faqBox">
                        <h2>Frequently Asked Questions</h2>

                        <div className="tab">
                            <input type="checkbox" id="chck1" />
                            <label className="tab-label" htmlFor="chck1">  When is the best/worst time to move?</label>
                            <div className="tab-content">
                                The best time to move is when you need to move! Moving fellas is here to provide you with moving services 7 days a week, right throughout the year. Our busiest time traditionally, as for every moving company, is during the summer months, usually the period between May 15 and September 15. End months are also, understandably, a buzzing time, as are the holiday weeks. While the date may have a bearing on the availability of trucks, loading crews, and overall moving costs, we will work to accommodate you and see to it that your transition is as smooth and hassle-free as possible.
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" id="chck2" />
                            <label className="tab-label" htmlFor="chck2">What are your hours of operation?</label>
                            <div className="tab-content">
                                <p>Our Irvine office hours are 7 AM - 7 PM on Mondays - Saturdays,  and 9 AM - 5 PM on Sundays.  However, we can work outside of normal hours of operation in the case of an emergency move.</p>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" id="chck3" />
                            <label className="tab-label" htmlFor="chck3">How do I book a move with Moving Fellas?</label>
                            <div className="tab-content">
                                <p>There are several ways you can book a move with us. You can fill out our online moving quote form, send us an email or simply give us a call today. Our contact information can be found here.</p>
                            </div>
                        </div>

                    </div>

                    <div className="faqImgBox">
                        <Bag2 />
                        <Calendar2 />
                        <Like2 />
                        <FaqImg />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq