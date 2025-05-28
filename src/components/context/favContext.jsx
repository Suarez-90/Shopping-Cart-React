import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import FavReducer from "../reducer/FavReducer";

export const FavContext = createContext();

const INITIAL_FAV = [];

export function FavProvider({ children }) {
  const [fav, dispatch] = useReducer(FavReducer, INITIAL_FAV);

  const add_fav = (prod) =>
    dispatch({
      type: 'addToFav',
      product: prod,
    });
  const remove_fav = (id) =>
    dispatch({
      type: 'removeFav',
      id: id,
    });
  const clean_fav = () =>
    dispatch({
      type: 'cleanFav',
    });

  return (
    <FavContext.Provider value={{ fav, add_fav, remove_fav, clean_fav }}>
      {children}
    </FavContext.Provider>
  );
}
