import {useState } from 'react'
import useCart from './useCart';
import useFav from './useFav';


function useToolBar() {
    const [open, setOpen] = useState(false);
    const [snack, setSnack] = useState(false);
    const [openfav, setOpenFav]= useState(false)
    const { state, clearCart } = useCart();
    const { favList, clean_fav } = useFav();
    
    
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
    
    const favToOpen = () => {
        setOpenFav(true)
    }
    const handleCloseFav = () => {
        setOpenFav(false);
    };
    const onHandleCleanFav = () => {
        clean_fav()
        handleCloseFav()
    }

    const handleClickSnack = () => {
        setSnack(true);
    };

    const onHandleCloseSnack = (event, reason) => {
        if (reason === "clickaway") {
        return;
        }
        setSnack(false);
    };

    return {open, snack,openfav,favList, onHandleCleanFav, favToOpen, handleCloseFav, cartList, onHandleBuy, onHandleClean, cartToOpen, onHandleCloseSnack, handleCloseModal }
}

export default useToolBar