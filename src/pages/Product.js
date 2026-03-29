import React, { useEffect, useState } from 'react'
import './../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom'

const Product = () => {

  const [data, setData] = useState([])

  const navigate = useNavigate()

  const getData = async () => {
    try {
      const data = await fetch('https://fakestoreapi.com/products')
      // console.log(data)
      const res = await data.json()
      console.log(res)
      setData(res)


    }
    catch (err) {
      console.log(err)

    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className='container'>
      <h1 className='text-center'>Products</h1>
        <div className='row'>
          {
            data.map((value) => {
              return <div className='col-md-3'>
                <div className='card mt-3'>
                  <div className='card-body'>
                    <img src={value.image} alt='' height='300px' width='100%'></img>
                    <h4>{value.title}</h4>
                    <button className='btn btn-primary' onClick={() => navigate(`/product/${value.id}`)}>View More</button>

                  </div>

                </div>

              </div>
            })
          }

        </div>

      </div>

    </>
  )
}

export default Product
