import { useState } from "react";
import { createContext } from "react";


export const FilterContext = createContext();

export function FilterProvider({children}) {
    const [filter , setFilter] = useState({
        price:0,
        category:'all'
    })    
    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}