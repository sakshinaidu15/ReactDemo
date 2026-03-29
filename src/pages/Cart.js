import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import Data from "./AuthContext";

const Cart = () => {
  const { isLoggedIn, cartItems } = useContext(Data)
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-body text-center">
              {isLoggedIn ? (
                <>
                  <h1>Your Cart</h1>
                  {cartItems.length > 0 ? (
                    <ul className="list-group">
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          {item.title}
                          <span className="badge bg-primary rounded-pill">
                            ${item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Your cart is empty</p>
                  )}
                </>
              ) : (
                <>
                  <h1>Your cart is empty</h1>
                  <button
                    className="btn btn-warning me-3"
                    onClick={() => navigate("/login")}
                  >
                    Sign in to your account
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => navigate("/register")}
                  >
                    Sign up now
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart