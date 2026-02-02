import { useState, useEffect, useRef } from 'react';
import './App.css';

const Item = ({ dessert, onAddToCart, cartItems, onUpdateQuantity }) => {

    // State to track if item is added to cart
    const [isAdded, setIsAdded] = useState(false);

    const buttonRef = useRef(null);

    const handleClick = () => {
        if (!isAdded) {
            onAddToCart(dessert);
            if (buttonRef.current) {
                buttonRef.current.style.backgroundColor = 'hsl(14, 86%, 42%)';
                setIsAdded(true);
            }
        }
    };

    // Check if item is in cart, and reset button if removed
    useEffect(() => {
        const itemInCart = cartItems.find(item => item.name === dessert.name);
        if (!itemInCart && isAdded) {
            setIsAdded(false);
            if (buttonRef.current) {
                buttonRef.current.style.backgroundColor = 'hsl(20, 50%, 98%)';
            }
        }
    }, [cartItems, dessert.name, isAdded]);

    // Get the current quantity from cartItems
    const itemInCart = cartItems.find(item => item.name === dessert.name);
    const currentQuantity = itemInCart ? itemInCart.quantity : 0;

    // Increase count
    const handleIncrease = (e) => {
        e.stopPropagation();
        onUpdateQuantity(dessert.name, currentQuantity + 1);
    };

    // Decrease count (with lower limit at 0)
    const handleDecrease = (e) => {
        e.stopPropagation();
        onUpdateQuantity(dessert.name, currentQuantity - 1);
    };

    // Store the current window width in state
    // This allows React to re-render when the width changes
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function that updates the width state on window resize
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array = run once on mount

    return (
        <div className="dessert-img">
            {/* 
        Choose image based on current screen width:
        - ≤ 600px   → mobile image
        - ≤ 1200px  → tablet image
        - > 1200px  → desktop image
      */}
            <img
                src={
                    width <= 600
                        ? dessert.image.mobile
                        : width <= 1200
                            ? dessert.image.tablet
                            : dessert.image.desktop
                }
                alt={dessert.name}
            />

            {/* Add to cart button */}
            <button className="add-to-cart" onClick={handleClick} ref={buttonRef}>
                {/* Needed to use a state flag to conditionally render the image and button text. Could not  directly store JSX with <img> in useState */}
                {!isAdded && (
                    <>
                        <img className='cart-img' src="/assets/images/icon-add-to-cart.svg" alt="add-to-cart" />
                        Add to Cart
                    </>
                )}
                {isAdded && <div className='increase-or-decrease'><div type="button" aria-label="Increase quantity" id='increment'><img aria-hidden="true" src="assets/images/icon-increment-quantity.svg" alt="" onClick={handleIncrease} /></div> {currentQuantity} <div id="decrement" type="button" aria-label="Decrease quantity"><img aria-hidden="true" className='minus' src="assets/images/icon-decrement-quantity.svg" alt="" onClick={handleDecrease} /></div></div>}
            </button>

            {/* Dessert information */}
            <div id="dessert-details">
                <p className="category">{dessert.category}</p>
                <h3>{dessert.name}</h3>

                {/* Format price to 2 decimal places */}
                <p className="price">${dessert.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Item;
