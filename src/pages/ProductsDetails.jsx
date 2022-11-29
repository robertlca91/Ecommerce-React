import React, { useEffect } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
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
      product.category.id === produ.category.id && product.id !== produ.id
  ) // este es como un map // crecar bien este codigo // el filter devuelve todas las coencidencias
  console.log(relativeProduct)
  return (
    <div className='ProductDetail'>
      <h1 className='text-info'>{produ?.title}</h1>
      <Row>
        <Col lg={9}>
          <div className='product-container'>
            <img src={produ?.productImgs[0]} alt='foto' className='img-fluid' />
            <img src={produ?.productImgs[1]} alt='foto' className='img-fluid' />
            <img src={produ?.productImgs[2]} alt='foto' className='img-fluid' />
          </div>
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
