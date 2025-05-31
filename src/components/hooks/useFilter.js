import { useContext } from 'react'
import { FilterContext } from '../context/filterContext';

function useFilter() {
    const context = useContext(FilterContext)
    const {filter, setFilter} = context

    if (context ===undefined) {
        throw new Error("No se puede leer un elemento sin contexto");        
    }

    const filterProducts = (products) =>{
        return products.filter(product => {
            return (
                product.price >= filter.price &&
                (
                    product.category === filter.category ||
                    filter.category === 'all'
                )
            )
        })        
    }

    const filterMoreRate = (product) =>{
        return product.filter(prod=> prod.rating.rate >= 4)
    }
    

  return {filter, setFilter, filterProducts, filterMoreRate}
}

export default useFilter