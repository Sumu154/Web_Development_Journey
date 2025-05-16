const getStoredCart = () => {
  const storedCartString = localStorage.getItem('cart');
  if(storedCartString){           //check korlo cart key er kono value ace kina,,jodi thake tahoel to
    return JSON.parse(storedCartString);     //oita JSON e convert kore return korbe
  }

  return [];
}

const saveCartToLS = cart => {
  const cartString = JSON.stringify(cart);
  localStorage.setItem('cart', cartString);
} 

const addToLS = (id) => {
  const cart = getStoredCart();     //ei function theke jeta retunr ashbe cart key er jonne value ta
  cart.push(id);                     //oi array tate new cart er id push krre dilam

  //save to local Storage
  saveCartToLS(cart);              // add kore ekhn local storage eo save korte hbe nahole save hbe na storage e
}

const removeFromLS = (id) => {
  const cart = getStoredCart();
  //removing every id
  const remaining = cart.filter(idx => {
    return idx !== id;
  })

  saveCartToLS(remaining);
}

export { addToLS , removeFromLS, getStoredCart };