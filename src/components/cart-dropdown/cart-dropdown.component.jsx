import { useContext } from 'react'


import { CartContext } from '../contexts/cart.context'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { Link } from 'react-router-dom'



const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
                    <Link className='button-container' to='/checkout'>
                        GO TO CHECKOUT
                    </Link>
        </div>
    )
}

export default CartDropdown