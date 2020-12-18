import React, {useState, useEffect} from 'react';

const ItemCount = () => {
    const [count, setCounter] = React.useState(0);
    
    // const aumentarContador = () => {
    //     setCounter(count + 1);
    //     if (count >= 5){
    //         alert('Sin stock disponible')
    //     };
    // };

    // const restarContador = () => {
    //     setCounter(count - 1);
    //     if (count >= 0){
    //         alert('Debe agregar algún producto')
    //     };
    // };

    useEffect(() => {
        if (count >= 5) {
           setCounter(5);
           alert('Sin stock disponible');
        }
      }, [count]);


    return(
        // <div>
        //     <div className="d-flex justify-content-center align-item-center">
        //         <button className="" onClick={restarContador}>-</button>
        //         {count}
        //         <button className="" onClick={aumentarContador}>+</button>
        //     </div>
        // </div>
        <div>
            <button onClick={() => setCounter(count - 1)}>-</button>
            {count}
            <button  onClick={() => setCounter(count + 1)}>+</button>
      </div>
    )
}

export default ItemCount;