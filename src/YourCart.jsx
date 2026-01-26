import React, { useState } from "react";
import PropTypes from 'prop-types'
import './App.css'
import Lightbox from './Lightbox'

/**
 * YourCart component displays the items in the user's shopping cart.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.cartItems - An array of items currently in the cart, where each item is an object containing:
 *   @param {string} item.name - The name of the item.
 *   @param {number} item.price - The price of the item.
 *   @param {number} item.quantity - The quantity of the item in the cart.
 * @param {Function} props.onRemoveFromCart - A function to handle removing an item from the cart, which takes the item's name as an argument.
 * 
 * The total number of items in the cart is calculated by summing the quantity of each item in the cart.
 * The order total is calculated by multiplying the price of each item by its quantity and summing these values for all items in the cart.
 */
const YourCart = ({ cartItems, onRemoveFromCart }) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const [componentVisible, setComponentVisible] = useState(false);

    const handleConfirmOrder = () => {
        // Logic to handle order confirmation can be added here
        console.log("Order confirmed!");
        setComponentVisible(true);

    }

    return (
        <>
            <div id="your-cart">
                <h2>Your Cart ({totalItems})</h2>
                <div id='adding'>
                    {cartItems.length === 0 ? (
                        <>
                            <img src="assets/images/illustration-empty-cart.svg" alt="empty-cart" />
                            <p>Your added items will appear here</p>
                        </>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.name} className="cart-item">
                                    <h4>{item.name}</h4>
                                    <div className="cart-item-info">
                                        <div className="cart-item-details">
                                            <p className='item-quantity'>{item.quantity}x</p>
                                            <p className="item-price">@ ${item.price.toFixed(2)}</p>
                                            <p>${(item.quantity * item.price).toFixed(2)}</p>
                                        </div>
                                        <div className='remove'>
                                            <img
                                                className='remove-icon'
                                                src="assets/images/icon-remove-item.svg"
                                                alt="remove-item"
                                                onClick={() => onRemoveFromCart(item.name)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="order-total">
                    {// Checks if there are any items in the cart
                        cartItems.length > 0 && (
                            <>
                                <div className="total-amount">
                                    <span>Order Total:</span>
                                    <span className="total">
                                        ${cartItems
                                            .reduce((total, item) => total + item.quantity * item.price, 0)
                                            .toFixed(2)}
                                    </span></div>
                                <div className="carbon-neutral">
                                    <p><img src="assets/images/icon-carbon-neutral.svg" alt="carbon-neutral" /> This is a <b>carbon-neutral</b> delivery</p>
                                </div>
                                <button className='confirm-order' onClick={() => handleConfirmOrder()}>Confirm Order</button>
                                <div className={`overlay ${componentVisible ? 'visible' : ''}`}></div>
                                {componentVisible && (<Lightbox isVisible={componentVisible} />)}
                            </>
                        )}
                </div>
            </div>
        </>
    )
}

YourCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
}

export default YourCart
