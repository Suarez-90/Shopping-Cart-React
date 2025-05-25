import { useReducer, createContext } from "react";
import CartReducer from "../reducer/CartReducer";

export const CartContext = createContext()

const INITIAL_STATE = []

export function CartProvider({children}) {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE)
    console.log(state)
    
    const addToCart= (product) => dispatch({
        type: 'ADD_TO_CART',
        product: product
    })

    const removeCart = (id)=> dispatch({
        type:'REMOVE_CART',
        id: id
    })
    const clearCart = ()=>dispatch({
        type: 'CLEAR_CART'
    })

  return (
    <CartContext.Provider value={{
        state,
        addToCart,
        removeCart,
        clearCart
    }}>
        {children}
    </CartContext.Provider>
  )
}

