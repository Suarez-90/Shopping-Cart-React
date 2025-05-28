import {useState } from 'react'
import useCart from './useCart';


function useToolBar() {
    const [open, setOpen] = useState(false);
    const [snack, setSnack] = useState(false);
    const { state, clearCart } = useCart();
    
    
    const cartList = state.length;

    const onHandleClean = () => {
        clearCart();
        handleCloseModal();
    };
    const onHandleBuy = () => {
        clearCart();
        handleCloseModal();
        handleClickSnack();
    };
    const cartToOpen = () => {
        setOpen(true);
    };
    const handleCloseModal = () => {
        setOpen(false);
    };
    const handleClickSnack = () => {
        setSnack(true);
    };

    const onHandleCloseSnack = (event, reason) => {
        if (reason === "clickaway") {
        return;
        }
        setSnack(false);
    };

    return {open, snack, cartList, onHandleBuy, onHandleClean, cartToOpen, onHandleCloseSnack, handleCloseModal }
}

export default useToolBar