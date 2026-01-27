import React from "react";
import './App.css'
import PropTypes from 'prop-types'


const Lightbox = ({ isVisible, onStartNewOrder, lightboxItems }) => {
    const totalItems = lightboxItems ? lightboxItems.reduce((sum, item) => sum + item.quantity, 0) : 0;

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
                    <img className="confirmed-icon" src="assets/images/icon-order-confirmed.svg" alt="Order Confirmed" />
                    <h2>Order Confirmed</h2>
                    <p>We hope you enjoy your food!</p>
                    {totalItems > 0 && (
                        <div className="lightbox-items-summary">
                            <div className="items-list">
                                {lightboxItems.map((item) => (
                                    <div key={item.name} className="lightbox-item">
                                        <div className="item-image">
                                            <img src={item.image.thumbnail} alt={item.name} />
                                        </div>
                                        <div className="lightbox-item-info">
                                            <div className="lightbox-item-name">
                                                <h5>{item.name}</h5>
                                            </div>

                                            <div className="lightbox-item-details">

                                                <div className="item-quantity-price">
                                                    <p className='item-quantity'>{item.quantity}x</p>
                                                    <p className="item-price">@ ${item.price.toFixed(2)}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="quantity-price">${(item.quantity * item.price).toFixed(2)}</div>

                                    </div>
                                ))}
                                <div className="total-amount">
                                    <span>Order Total:</span>
                                    <span className="total">
                                        ${lightboxItems
                                            .reduce((total, item) => total + item.quantity * item.price, 0)
                                            .toFixed(2)}
                                    </span></div>
                            </div>
                        </div>
                    )}
                    <button className='confirm-order' onClick={() => handleStartNewOrder()}>Start New Order</button>
                </div>
            </div>
        </>
    )
}

Lightbox.propTypes = {
    isVisible: PropTypes.bool,
    onStartNewOrder: PropTypes.func,
    lightboxItems: PropTypes.array,
}

export default Lightbox;
