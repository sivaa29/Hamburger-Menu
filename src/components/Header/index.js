// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="navbar-container">
    <div className="navbar">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="web-logo"
        />
      </Link>
      <Popup
        className="popup"
        modal
        trigger={
          <button
            type="button"
            className="hamburger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" aria-label="close" />
          </button>
        }
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-icon"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" aria-label="close" />
            </button>
            <ul className="nav-items-list">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => close()}>
                  <AiFillHome size="35" color="#616e7c" />
                  <p className="nav-item-name">Home</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={() => close()}>
                  <BsInfoCircleFill size="35" color="#616e7c" />
                  <p className="nav-item-name">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
