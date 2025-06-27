import PropTypes from 'prop-types';

import { useEffect, useState } from "react";

import Bottle from '../Bottle/Bottle.jsx'
import './Bottle.css'
import { addToLS, removeFromLS, getStoredCart } from "../../Utils/Store/localStorage.js";
import Cart from '../Cart/Cart'

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);         //ekekta bottl purcgase korle ei array te add hbe

  useEffect(() => {
    const fetchBottles = async () => {
      const res = await fetch('Json/BottleApi.json');
      const data = await res.json();

      setBottles(data);

    }

    fetchBottles();
  }, [])



  // load cart from localStorage
  useEffect(() => {
    console.log('called the useEffect', bottles.length);
    if(bottles.length){
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);              //pura shbgula bottle er info load kore niye ashlam

      const savedCart = [];
      for(const id of storedCart){
        console.log(id);
        const bottle = bottles.find(i => {
          return i.id === id;     // jar sathe id mile jabe oi pura object ta return korbe bottles array theke
        })

        if(bottle){
          savedCart.push(bottle);
        }
      }

      console.log(savedCart);
      setCart(savedCart);
    }
   
  }, [bottles])


  const handleAddToCart = (bottle) => {
    // console.log('bottle to be added')
    // console.log(bottle);

    const newCart = [...cart, bottle];
    setCart(newCart);

    addToLS(bottle.id);   //local storage e add korteci

  }

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter(it => {
      return it.id !== id;
    });
    setCart(remainingCart);
    // remove from LS 
    removeFromLS(id); 
  }




  // physically component ta dekhte etotuku
  return (
    <div>
      <h2> Bottles here: {bottles.length} </h2>
      <Cart cart={cart} handleRemoveFromCart = {handleRemoveFromCart} > </Cart>

      <div className="bottle-container">
        {bottles.map(it => {
          return <Bottle key={it.id}  bottle={it}  handleAddToCart={handleAddToCart}> </Bottle>
        })}
      </div>

    </div>
  )
}

Bottle.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  bottle: PropTypes.array.isRequired,
  Cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired
}

export default Bottles;