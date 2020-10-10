import React from 'react';

function Product(props) {
    return(
        <li>
            <div>Image</div>
            <div>Product {props.id}</div>
            <div><button>Comprar</button></div>            
        </li>
    );
}

export default Product;