import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

function useCart() {
    const context = useContext(CartContext)
    const {addToCart,removeCart, clearCart, state}= context
    
    if (context ===undefined) {
        throw new Error("No se puede leer un elemento sin contexto");       
    }
    
  return {addToCart,removeCart, clearCart, state}
}

export default useCart