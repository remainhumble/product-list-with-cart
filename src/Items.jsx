import './App.css'
import Item from './Item.jsx'
import PropTypes from 'prop-types'


const Items = ({ desserts, onAddToCart, cartItems }) => {
    return (
        <>
            <div className="grid">
                {desserts.map((dessert, index) => (
                    <Item key={index} dessert={dessert} onAddToCart={onAddToCart} cartItems={cartItems} />
                ))}
            </div>
        </>
    )
}

Items.propTypes = {
    desserts: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
}

export default Items;