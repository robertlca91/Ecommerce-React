import React, { useEffect, useState } from 'react'
import { Button, Carousel, Col, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { createCartThunk } from '../store/slices/cart.slice'
import { getProductsThunk } from '../store/slices/products.slice'

const ProductsDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])
  const productList = useSelector((state) => state.products)
  const produ = productList.find((product) => product.id === Number(id)) // es como un map  // checar bien el codigo // el find devuelve la primera condicion
  const relativeProduct = productList.filter(
    (product) =>
      product.category.id === produ?.category.id && product.id !== produ.id
  ) // este es como un map // crecar bien este codigo // el filter devuelve todas las coencidencias
  console.log(relativeProduct)

  // para agregar productos al carrito , creas un arreglo, 
  const [rate, setRate] = useState('') // estado para variar la cantidad

  const addItem = () => {
    const productsInCart = {
      id: produ.id,
      quantity: rate
    }
    console.log(productsInCart);
    dispatch(createCartThunk(productsInCart))
  }



  return (
    <div className='ProductDetail'>
      <h1 className='text-info'>{produ?.title}</h1>
      <input
        type="text"
        value={rate}
        onChange={e => setRate(e.target.value)}
      />
      <Button onClick={addItem}>Add item</Button>
      <Row>
        <Col lg={9}>
          <Carousel>
            <Carousel.Item>
              <img
                src={produ?.productImgs[0]}
                alt='foto'
                className='d-block w-100'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={produ?.productImgs[1]}
                alt='foto'
                className='d-block w-100'
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                src={produ?.productImgs[2]}
                alt='foto'
                className='d-block w-100'
              />

            </Carousel.Item>
          </Carousel>
          {/* <div className='product-container py-10 my-5 '>


            <img
              src={produ?.productImgs[0]}
              alt='foto'
              className='img-fluid'
              style={{ height: 500 }}
            />
            <img
              src={produ?.productImgs[1]}
              alt='foto'
              className='img-fluid p-10'
              style={{ height: 500 }}
            />
            <img
              src={produ?.productImgs[2]}
              alt='foto'
              className='img-fluid'
              style={{ height: 500 }}
            />
          </div> */}
          <p className='text-info'>{produ?.description}</p>
        </Col>
        <Col lg={3}>
          <h3 className='text-info'>product relative</h3>
          <ListGroup>
            {relativeProduct.map((relative) => (
              <ListGroup.Item key={relative.id} className='group'>
                <Link to={`/products/${relative.id}`}>
                  <div>
                    <img
                      src={relative.productImgs[0]}
                      alt='img'
                      style={{ width: 100 }}
                      className='img-fluid'
                    />
                  </div>
                  {relative.title}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {/* <h3>product relative</h3> */}
          {/* {relativeProduct.map((relative) => (
            <li>
              <Link key={relative.id} to={`/products/${relative.id}`}>
                {relative.title}
              </Link>
            </li>
          ))} */}
        </Col>
      </Row>

      {/* revisar todo el codigo */}
    </div>
  )
}

export default ProductsDetails
