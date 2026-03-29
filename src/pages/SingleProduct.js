import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import Data from "./AuthContext";

const SingleProduct = () => {

  const [data, setData] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useContext(Data)

  const getSingleData = async () => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`)
      const res = await data.json()
      console.log(res)
      setData(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSingleData()
  }, [])

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/login')
    } else {
      addToCart(data)        // Add product to cart
      navigate('/cart')
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Product Detail</h1>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-body d-flex">
                <div className="pe-5">
                  <img src={data.image} alt="" height="300px" width="300px" />
                </div>
                <div className="pt-3">
                  <h4>{data.title}</h4>
                  <h6>{data.description}</h6>
                  <h6>Category - {data.category}</h6>
                  <h6>Price - ${data.price}</h6>
                  <button className="btn btn-primary me-3">Buy Now</button>
                  <button
                    className="btn btn-warning"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
