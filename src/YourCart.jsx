import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

const YourCart = ({ cartItems, onRemoveFromCart }) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)


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
            </div>
        </>
    )
}

YourCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
}

export default YourCart
