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
    <div>
      <h1>{produ?.title}</h1>
      <Row>
        <Col lg={9}>
          <img src={produ?.productImgs[0]} alt='foto' className='img-fluid' />
          <p>{produ?.description}</p>
        </Col>
        <Col lg={3}>
          <h3>product relative</h3>
          <ListGroup>
            {relativeProduct.map((relative) => (
              <ListGroup.Item key={relative.id}>
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
