import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/logo.svg'

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../components/contexts/user.context';
import { CartContext } from '../../components/contexts/cart.context';

import './navbar.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils';



const Navbar = () => {

      const { currentUser } = useContext(UserContext)
      const { isCartOpen } = useContext(CartContext)

      
        

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

                    <CartIcon></CartIcon>

              </div>
              {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
          </Fragment>
        )
      }

    
  


export default Navbar;