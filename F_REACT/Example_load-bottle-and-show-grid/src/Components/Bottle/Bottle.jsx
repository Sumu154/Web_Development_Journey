import PropTypes from 'prop-types';

import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
  // console.log(bottle);

  const {name, img, price} = bottle;

  return (
    <div className="bottle">
      <h5 className="heading"> Bottle: {name} </h5>
      <img src={img} alt="" />
      <p className="price"> Price: ${price} </p>
      <button className="" onClick={()=> handleAddToCart(bottle)}> Purchase </button>

    </div>
  )
}


Bottle.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired
}
export default Bottle;