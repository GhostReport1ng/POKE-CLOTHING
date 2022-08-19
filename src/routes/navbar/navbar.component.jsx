import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/logo.svg'
import { UserContext } from '../../components/contexts/user.context';
import './navbar.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils';



const Navbar = () => {

      const { currentUser } = useContext(UserContext)


      
        

        return (
          <Fragment>
            <div className='navbar'>
              <Link className='logo-container' to='/'>
                <CrownLogo className='logo' />
              </Link>
              <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        HOME
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>

                    {currentUser ? (
                      
                      <div>

                      <span>{`Hello ${currentUser.displayName}`}</span>
                      <span className='nav-link' onClick={signOutUser}>
                      SIGN OUT
                      </span>

                      
                      </div>)
                      : (<Link className='nav-link' to='/auth'>
                        SIGN IN
                        </Link>)
                    }

              </div>
            </div>
            <Outlet />
          </Fragment>
        )
      }

    
  


export default Navbar;