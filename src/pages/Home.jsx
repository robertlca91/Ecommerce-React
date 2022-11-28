import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterHeadlineThunk,
  filterProductsThunk,
  getProductsThunk,
} from '../store/slices/products.slice'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { Button, Card, Col, InputGroup, ListGroup, Row } from 'react-bootstrap'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const [categoryList, setCategoryList] = useState([])
  const [inputSearch, setInputSearch] = useState('')

  useEffect(() => {
    dispatch(getProductsThunk())
    axios
      .get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
      .then((res) => setCategoryList(res.data.data.categories))
  }, [])

  return (
    <div>
      <Row>
        <Col lg={3}>
          <ListGroup>
            {categoryList.map((category) => (
              // <Button
              //   key={category.id}
              //   onClick={() => dispatch(filterProductsThunk(category.id))}
              // >
              //   {category.name}
              // </Button>
              <ListGroup.Item
                key={category.id}
                style={{ cursor: 'pointer' }}
                onClick={() => dispatch(filterProductsThunk(category.id))}
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={9}>
          <h1>Componentes del Home</h1>
          {/* todo esto es del estado de category */}
          <InputGroup className='mb-3'>
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <Button
              variant='outline-secondary'
              onClick={() => dispatch(filterHeadlineThunk(inputSearch))}
            >
              Search
            </Button>
          </InputGroup>
          <Row xs={1} md={2} className='g-4'>
            {products?.map((product) => (
              <Col key={product.id}>
                <Card>
                  <Link
                    to={`/products/${product.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Card.Img
                      style={{
                        width: 300,
                        height: 300,
                      }}
                      variant='top'
                      src={product.productImgs[0]}
                      // style={{ objectFit: 'cover', height: 200 }}
                    />
                    <Card.Body>
                      <Card.Title>
                        <p>{product.title}</p>
                      </Card.Title>
                      <Card.Text>Price</Card.Text>
                      <Card.Text>$ {product.price}</Card.Text>
                    </Card.Body>
                  </Link>
                  <Card>
                    <i className='fa-solid fa-cart-shopping flex cart'></i>
                  </Card>
                </Card>
              </Col>
            ))}
          </Row>

          {/* este es oto checar products */}
          {/* {products?.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <p>{product.title}</p>
                <img src={product.productImgs[0]} alt='foto' />
              </Link>
            </li>
          ))} */}
        </Col>
      </Row>
    </div>
  )
}

export default Home
