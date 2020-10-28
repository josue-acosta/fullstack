import React from 'react';
import image from '../images/img-01.jpg'

const NewOrder = () => {
    return (
        <>
            <h2>New Order</h2>
            <img src={image} alt="Bakery display case" style={{ width: "100%" }} />
        </>
    );
}

export default NewOrder;