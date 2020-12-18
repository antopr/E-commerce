import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({aviso}) => {
    return(
        <div>
            <h1 className="text-center p-3">{aviso}</h1>
            <ItemCount/>
        </div>
       
    )
}

export default ItemListContainer;