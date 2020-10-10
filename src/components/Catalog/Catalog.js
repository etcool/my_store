import React from 'react';
import ListProduct from './ListProduct';

function Catalog() {
    return(
        <div>
            <div>
                <h3>Catálogo de productos</h3>
                <div>
                    <ListProduct />
                </div>
            </div>
        </div>
    );
}

export default Catalog;