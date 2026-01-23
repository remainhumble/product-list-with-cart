import './App.css'
import Item from './Item.jsx'
import PropTypes from 'prop-types'


const Items = ({ desserts, onAddToCart }) => {
    return (
        <>
            <div className="grid">
                {desserts.map((dessert, index) => (
                    <Item key={index} dessert={dessert} onAddToCart={onAddToCart} />
                ))}
            </div>
        </>
    )
}

Items.propTypes = {
    desserts: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
}

export default Items;