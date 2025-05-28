import { useContext } from "react";
import { FavContext } from "../context/favContext";


function useFav() {
    const context = useContext(FavContext);
    const { fav, add_fav, remove_fav} = context
    const favList = fav.length

    if (context===undefined) {
        throw new Error("No se puede leer ningun elemento sin el contexto FavContext");
        
    }
    

  return { fav, add_fav, favList , remove_fav}
}

export default useFav