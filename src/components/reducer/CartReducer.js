
function CartReducer(state, action) {

    switch (action.type) {        
        case 'ADD_TO_CART': {
            const productInCart = state.findIndex(item => item.id === action.product.id)
            if (productInCart >=0) {
                const newState = structuredClone(state)
                newState[productInCart].quantity +=1
                return newState
            }
            return [...state, {...action.product,quantity:1}]
        }
        case 'Rest_QTY':{
            const productIndex = state.findIndex(item => item.id === action.product.id)
            const newState = structuredClone(state)
                newState[productIndex].quantity -=1
                return newState 
        }        
        case 'REMOVE_CART':{
            return state.filter(item => item.id !== action.id)
        }    
        case 'CLEAR_CART':{
            return []
        }
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default CartReducer