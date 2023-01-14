import React, {createContext,useState} from 'react'
export const CartContext = createContext();



const CartContextProvider = ({children}) => {

  


  const data = {};

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext