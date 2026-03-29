// AuthContext.js
import React, { createContext, useState } from "react";

const Data = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"))
  const [cartItems, setCartItems] = useState([])

  const login = (token) => {
    localStorage.setItem("token", token)
    setIsLoggedIn(true)
    setCartItems([
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
    ])
  }

  const logout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    setCartItems([])
  }

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCartItems; // Avoid duplicate items in the cart
      }
      return [...prevCartItems, product];
    })
  }


  return (
    <Data.Provider value={{ isLoggedIn, login, logout, cartItems, addToCart }}>
      {children}
    </Data.Provider>
  )
}
export default Data
