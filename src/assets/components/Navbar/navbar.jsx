import AirBnbLogo from '../img/Airbnb.png'
import Globe from '../img/globe.svg'
import Hamburger from '../img/hamburger.svg'
import Pfp from '../img/pfp.svg'
import './navbar.css'
function Navbar() {
  return (
    <>
    
      <div className='navbar'>
        <div className="navbar-left">
          <img src={AirBnbLogo} height='30px'></img>
        </div>
        <div className="navbar-center">
          <div className="stays hover-dark"><a href='#'>Stays</a></div>
          <div className="experienes pill-container"><a href='#' className='light-text'>Experiences</a></div>
        </div>
        <div className="navbar-right">
          <div className='navbar-right-child'>
            <div className="airbnb-your-home pill-container"><a href='#'className='light-text'>Airbnb your home</a></div>
            <div className="region pill-container"><a href='#' className='region-a'><img src={Globe} alt="" height='19.2px' /></a></div>
            <div className='login-container '>
              <a href="#" className='login'>
                <div><img src={Hamburger} alt="" height='10px' /></div>
                <div className="userImg"><img src={Pfp} alt="" height='30px' /></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar