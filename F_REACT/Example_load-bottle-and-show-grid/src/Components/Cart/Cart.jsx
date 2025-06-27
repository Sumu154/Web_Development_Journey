import PropTypes from 'prop-types';

import './Cart.css'


const Cart = ({cart, handleRemoveFromCart}) => {
  return (
    <div>
      <h3> Bottle added: {cart.length} </h3>
      <div className="cart-container">
      {cart.map(bottle => (
        <div key={bottle.id}> {/* Wrap both elements in a div */}
          <img src={bottle.img} alt="" />
          <button onClick={() => handleRemoveFromCart(bottle.id)}> Remove </button>
        </div>
      ))}

      </div>
    </div>
  )
}

Cart.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;