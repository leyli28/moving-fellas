import './home.css'
import './homemedia.css'
import { Bag, Calendar, File, Like, Noise } from '../../assets/icons'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='landing mesh'>
      <Bag />
      <Like />
      <Calendar />
      <File />
      <Noise />
      <Navbar />
      <div className="container z2">
       
        <h1>we’re Moving Company <span>with a Personal Touch</span></h1>
        <p>Moving Accompanies stress and fatigue and requires too much effort and time. The transport guys will do all the hard work for you. Our professional movers will accompany your cargo from the beginning to the end of the process with an individual approach. Your trust and peace of mind is our priority.</p>
      </div>
    </div>
  )
}

export default Home