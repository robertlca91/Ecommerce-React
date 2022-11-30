import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPucharsesthunk } from '../store/slices/purchases.slice'

const Purchases = () => {
  const dispatch = useDispatch()
  const purchases = useSelector((state) => state.purchases)
  useEffect(() => {
    dispatch(getPucharsesthunk())
  }, [])
  console.log(purchases)
  return (
    <div>
      {purchases.map((purchase) => (
        <div key={purchase.id}>
          <p>
            <b>{purchase.createdAt}</b>
          </p>
          {purchase.cart.products.map((prod) => (
            <div key={prod.id}>
              <Link to={`/products/${prod.id}`}>{prod.title}</Link>
              <p>{prod.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default Purchases
