
function FavReducer(fav, action) {
    switch (action.type) {
        case "addToFav":{
            return [...fav, {...action.product, favorite:true}]
        }
        case "removeFav":{
            return fav.filter(item => item.id !== action.id)
        }
        case "cleanFav": {
            return []
        }
            
            
    
        default:
            break;
    }
 
}

export default FavReducer