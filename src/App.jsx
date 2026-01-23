import './App.css'
import { useState } from 'react'
import Items from './Items.jsx'
import desserts from '../data.json'
import YourCart from './YourCart.jsx'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (dessert) => {
    // Check if the dessert item already exists in the cart by name
    const existingItem = cart.find(item => item.name === dessert.name)

    if (existingItem) {
      // If the item is already in the cart, increment its quantity
      setCart(cart.map(item =>
        item.name === dessert.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      // If the item is new, add it to the cart with quantity 1
      setCart([...cart, { ...dessert, quantity: 1 }])
    }
  }

  return (
    <>
      <h1>Desserts</h1>
      <div className="app-container">
        <Items desserts={desserts} onAddToCart={addToCart} />
        <YourCart cartItems={cart} />
      </div>
    </>
  )
}

export default App;
