import './check-out.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../components/contexts/cart.context'


const CheckOut = () => {

    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)


    return(
        <div className='check-out-container'>

            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Description</span>

                </div>

                <div className='header-block'>
                    <span>Quantity</span>

                </div>

                <div className='header-block'>
                    <span>Price</span>

                </div>

                <div className='header-block'>
                    <span>Remove</span>

                </div>


            </div>
            <div>
           
                {cartItems.map((cartItem) => {
                    const { id, name, quantity, imageUrl } = cartItem;
                    return (
                        <div key={id}>
                            <img src={imageUrl} alt={`${name}`}></img>
                            
                            <h2>{name}</h2>
                            
                            <span onClick={() => removeItemFromCart(cartItem) }>decrease </span> 
                            <span>{quantity}</span>
                            <span onClick={() => addItemToCart(cartItem)}> increase</span>
                            
                            
                        </div>
                    )
                    })}
            </div>
        </div>
    )
}

export default CheckOut