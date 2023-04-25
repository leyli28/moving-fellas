import "./footer.css"
import "./footermedia.css"
import { Logo, Mesh3 } from '../../assets/icons'

const Footer = () => {
    return (

        <footer id="contacts">
            <Mesh3 />
            {/* <img className="mesh3" src="img/mesh3.png"> */}
            <div className="container">
                <div className="classForm">
                    <div className="glass"></div>
                    <div className="wrapper alignCenter z2">
                        <div className="textDiv">
                            <h2 className="white">Let’s try our service now!</h2>
                            <p className="white">Everything you need to fill our quote form and relax.</p>
                        </div>
                        <a href="#getQuote" className="btn mainBtn" >Get quote</a>
                    </div>
                </div>
                <div className="footerNav">
                    <div className="logoDiv">
                        <a href="/">
                            <Logo />
                        </a>
                        <p>© 2022 Moving Fellas. All rights reserved.</p>
                    </div>
                   <div className="footerElements">
                   <div className="linkDiv">
                        <h6>Links</h6>
                        <a href="/">Home</a>
                        <a href="#services">Services</a>
                        <a href="#reviews">Why us</a>
                        <a href="#faq">Faq</a>
                        <a href="#contacts">Contacts</a>
                    </div>
                    <div className="adressDiv">
                        <h6>Address</h6>
                        <p>7032 Murphy Ave,<br/> Irvine, CA, 92614</p>
                    </div>
                    <div className="phoneDiv">
                        <h6>Phone</h6>
                        <a href="Tel: 949-773-5117">949-773-5117</a>
                    </div>
                    <div className="emailDiv">
                        <h6>E-mail</h6>
                        <a href="mailto: info@movingfellas.com">info@movingfellas.com</a>
                    </div>
                    <div className="copyDiv">
                        <h6>Designed by </h6>
                        <a href="https://www.caspy.biz/" target="_blank"> Caspy Creative Solutions</a>
                    </div>
                  
                   </div>
                   
                </div>
               
            </div>
          
        </footer>
    )
}

export default Footer