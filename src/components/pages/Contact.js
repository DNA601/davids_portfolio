import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Contact() {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ comment, setComment ] = useState('');


  function input(event){

    event.preventDefault()
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    console.log('Anything');
    if( email === '') {
      alert('Invalid, Please enter an email address')
      return;
    }
    if(!regex.test(email)){
      alert('Invalid, Please enter an email address')
      return;
    }
    console.log(email);

    if( name === '') {
      alert('Your name is required')
      return;
    }
    if( comment === '') {
      alert('Please leave a comment')
      return;
    }
  
  
    

    
  }

  function onChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  
  function onChangeName(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  
  function onChangeComment(event) {
    console.log(event.target.value);
    setComment(event.target.value);
  }


  return (
   


     <Form>
      <Row className="mb-3">

      <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter First and Last Name" onChange={onChangeName}/>


        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} nChange={onChange} />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }} onChange={onChangeComment}/>

      </FloatingLabel>
      </Row>
      <Button onClick={input} as="input"  value="Submit" />{' '}
      
    </Form>
  );
}




