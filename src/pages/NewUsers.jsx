import axios from 'axios'
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const NewUsers = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const submit = (newusers) => {
    axios
      .post(`https://e-commerce-api.academlo.tech/api/v1/users`, newusers)
      .then((res) => navigate('/'))
    console.log(newusers)
  }
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Form.Group className='mb-3' controlId='formBasicFirstName'>
        <Form.Label>firstName</Form.Label>
        <Form.Control
          type='text'
          placeholder='FirstName'
          {...register('firstName')}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicLastName'>
        <Form.Label>lastName</Form.Label>
        <Form.Control
          type='text'
          placeholder='LastName'
          {...register('lastName')}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder='Email' {...register('email')} />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          {...register('password')}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>phone</Form.Label>
        <Form.Control
          type='number'
          placeholder='Number'
          {...register('phone')}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default NewUsers
