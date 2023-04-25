import './topbtn.css'
import './topbtnmedia.css'

const TopBtn = () => {

const top = () =>{
    window.scrollTo(0,0);
}


  return (
 <button className='topBtn btn' onClick={top}></button>
  )
}

export default TopBtn