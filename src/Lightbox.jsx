import React from "react";
import './App.css'
import PropTypes from 'prop-types'

const Lightbox = ({ isVisible, onStartNewOrder }) => {

    const handleStartNewOrder = () => {
        // Logic to start a new order can be added here
        console.log("Starting a new order!");
        // Call the callback from parent to close lightbox and reset cart
        if (onStartNewOrder) {
            onStartNewOrder();
        }
    }

    return (
        <>
            {isVisible && <div className="overlay visible"></div>}
            <div className={`lightbox ${isVisible ? 'visible' : ''}`}>
                <div className="lightbox-content">
                    <img src="assets/images/icon-order-confirmed.svg" alt="Order Confirmed" />
                    <h1>Order Confirmed</h1>
                    <p>We hope you enjoy your food!</p>
                    <button className='confirm-order' onClick={() => handleStartNewOrder()}>Start New Order</button>
                </div>
            </div>
        </>
    )
}

Lightbox.propTypes = {
    isVisible: PropTypes.bool,
    onStartNewOrder: PropTypes.func,
}

export default Lightbox;
