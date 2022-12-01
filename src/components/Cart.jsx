import React, { useEffect } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  checkoutCartThunk,
  deleteThunkId,
  getCartThunk,
} from '../store/slices/cart.slice'

const Cart = ({ show, handleClose }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <Button onClick={() => dispatch(deleteThunkId(product.id))}>
              Delete
            </Button>
          </div>
        ))}
        <Button onClick={() => dispatch(checkoutCartThunk())}>Checkout</Button>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cart
