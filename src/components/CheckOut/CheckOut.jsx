import { useNavigate } from "react-router-dom";
import './checkout.css'

const CheckOut = () => {
    const navigate = useNavigate();
    return (
        <div className='checkout'>
      
            {/* <Navbar /> */}
            <div className="container">

                <h1>Thank you!</h1>
                <h2>A few more steps are remaining!</h2>
                <ol>
                    <li>Request a free, no-obligation quote – <span className='checkoutspan'>DONE.</span><br /></li>
                    <li>Our Relocation Specialist will contact you and give you a digital quote –<span> NEXT STEP.</span><br /></li>
                    <li>Book your move.</li>
                </ol>
                <button id="sendBtn" className="btn mainBtn" type="submit" onClick={(e)=>{window.location.replace('/')}}>Back Home</button>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default CheckOut