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
    <div className=''>
      {purchases.map((purchase) => (
        <div key={purchase.id} className='purchase-cont'>
          <div className='date'>
            <p>
              {purchase.createdAt}
            </p>
          </div>
          {purchase.cart.products.map((prod) => (
            <div key={prod.id}>
              <Link
                to={`/products/${prod.id}`}
                className='container-link text-info'
              >
                <p className='flex1'>{prod.title}</p>
                <div className='flex0 flex2'>
                  <p >{prod.productsInCart.quantity}</p>
                </div>

                <p className='flex0'>{prod.price}</p>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default Purchases

// prod.productsInCart.quantity