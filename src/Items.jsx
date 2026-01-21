import './App.css'
import Item from './Item.jsx'


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

export default Items;