import './highreview.css'
import google from '../../assets/google.jpg'
import Trustpilot from '../../assets/Trustpilot.png'
import yelp from '../../assets/yelp.jpg'
import bbb from '../../assets/bbb.png'
import angi from '../../assets/angii.jpg'
import Thumbtack from '../../assets/Thumbtack.png'
const HighReview = () => {
  return (
    <div className="container mt150" id='companies'>            
            <div className="wrapper  flexColumn">
            <h2>Highly Reviewed on</h2>
               <div className="companies mt50">
                <div className="companyCard">
                <div className="companyImg">
                    <img src={google} alt="" />
                </div>
                <div className="companyInfo">4,9 stars based on 1,719 reviews</div>
                </div>
                <a className="companyCard" target="_blank" href='http://trustpilot.com/review/movingfellas.com'>
                <div className="companyImg"> <img src={Trustpilot} alt="" /></div>
                <div className="companyInfo">4,9 stars based on 1,719 reviews</div>
                </a>
                <a className="companyCard" target="_blank" href="https://www.yelp.com/biz/moving-fellas-irvine">
                <div className="companyImg" > <img src={yelp} alt="" /></div>
                <div className="companyInfo">4,9 stars based on 1,719 reviews</div>
                </a>
                <a className="companyCard" target="_blank" href='https://www.thumbtack.com/'>
                <div className="companyImg"> <img src={Thumbtack} alt="" /></div>
                <div className="companyInfo">4,9 stars based on 1,719 reviews</div>
                </a>
                {/* <a className="companyCard" target="_blank" href='https://www.bbb.org/us/ca/irvine/profile/moving-services/moving-fellas-1126-1000108706'>
                <div className="companyImg"> <img src={bbb} alt="" /></div>
                <div className="companyInfo">4,9 stars based on 1,719 reviews</div>
                </a> */}
                <a className="companyCard" target="_blank" href='https://www.angi.com/companylist/us/ca/beverly-hills/moving-fellas-reviews-10492990.htm'>
                <div className="companyImg"> <img src={angi} alt="" /></div>
                <div className="companyInfo">4,9 stars based on 1,719 reviews</div>
                </a>
               </div>
            </div>
        </div>
  )
}
export default HighReview