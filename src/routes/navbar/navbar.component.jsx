import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/logo.svg'
import './navbar.styles.scss'

const Navbar = () => {
    return (
      <Fragment>
        <div className='navbar'>
          <Link className='logo-container' to='/'>
            <CrownLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/sign-in'>
                    SIGN IN
                </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }


export default Navbar;