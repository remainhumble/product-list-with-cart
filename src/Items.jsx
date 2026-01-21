import './App.css'
import Item from './Item.jsx'
import PropTypes from 'prop-types'


const Items = ({ desserts }) => {
    return (
        <>
            <div className="grid">
                {desserts.map((dessert, index) => (
                    <Item key={index} dessert={dessert} />
                ))}
            </div>
        </>
    )
}

Items.propTypes = {
    desserts: PropTypes.array.isRequired,
}

export default Items;