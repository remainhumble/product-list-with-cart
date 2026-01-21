import React from 'react'
import './App.css'
import Items from './Items.jsx'
import desserts from '../data.json'
import YourCart from './YourCart.jsx'

function App() {
  return (
    <>
      <h1>Desserts</h1>
      <div className="app-container">
        <Items desserts={desserts} />
        <YourCart />
      </div>
    </>
  )
}

export default App;
