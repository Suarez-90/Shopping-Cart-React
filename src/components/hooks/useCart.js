import {useCallback} from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

function useCart() {
    const context = useContext(CartContext)
    const {addToCart,removeCart, clearCart, restToQty, state}= context
    
    if (context ===undefined) {
        throw new Error("No se puede leer un elemento sin contexto");       
    }

    const totalPrice = useCallback((state)=>{
      return (state.length > 0 && state?.map(({price,quantity})=> price*quantity).reduce((acc, val)=> acc+val))
    },[])
    
   
    
  return {addToCart,removeCart, clearCart, state, restToQty,totalPrice}
}

export default useCart