import React from 'react';
import Product from './Product';

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listProduct = products.map((product) => 
    <Product id={product} />
)

function ListProduct() {
    return(
        <ul>{listProduct}</ul>
    );
}

export default ListProduct;
