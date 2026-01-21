import { useState, useEffect } from 'react';
import './App.css';

const Item = ({ dessert }) => {
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
            <button className="add-to-cart">
                <img src="assets/images/icon-add-to-cart.svg" alt="add-to-cart" />
                Add to Cart
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
