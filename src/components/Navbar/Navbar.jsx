import { Logo } from '../../assets/icons'
import { useRef,useState } from 'react'
import './burger.css'
import './navbar.css'
import './navbarmedia.css'

const Navbar = () => {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setMenuClicked] = useState("false")
  const navRef = useRef();
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }

    setMenuClicked(!isMenuClicked)
  }

  const handleClick = () =>{
    setBurgerClass("burger-bar unclicked")
    setMenuClass("menu hidden")
  }

  return (
    <div className='container z6'>
      <nav >
        <a href="/"><Logo /></a>
        <div className="navItems">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#reviews">Why us</a>
          <a href="#faq">Faq</a>
          <a href="#contacts">Contacts</a>
          <a href="Tel: 949-773-5117" className='mainBtn btn'>949-773-5117</a>
          {/* <button className="btn mainBtn">Get quote</button> */}
        </div>
        <div className='burgerMenu' onClick={updateMenu}>
          <div className="burger-menu">
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>

        </div>
        <div className={menu_class} ref={navRef}>
          <div className="burgerLinks ">
            <a href="/" onClick={handleClick}>Home</a>
            <a href="#services" onClick={handleClick}>Services</a>
            <a href="#reviews" onClick={handleClick}>Why us</a>
            <a href="#faq" onClick={handleClick}>Faq</a>
            <a href="#contacts" onClick={handleClick}>Contacts</a>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar

