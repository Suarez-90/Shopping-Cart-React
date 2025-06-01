export async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data
    } catch (error) {
        throw new Error ('An error occurred while fetching data.'+ error);
    }
            
}

    
