import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-main-card">
      <div className="nav-card">
        <div className="nav-logo-card">
          <Link to="/">
            <img
              className="nav-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-b-card">
            <li className="nav-li">
              <Link to="/">
                <button type="button" className="nav-b">
                  <AiFillHome className="nav-icon" />
                </button>
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/jobs">
                <button type="button" className="nav-b">
                  <BsBriefcaseFill className="nav-icon" />
                </button>
              </Link>
            </li>
            <li className="nav-li">
              <button type="button" className="nav-b" onClick={onClickLogout}>
                <FiLogOut className="nav-icon" />
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-large-card">
          <Link to="/">
            <img
              className="nav-bar-website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          <button type="button" className="logout-b" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
