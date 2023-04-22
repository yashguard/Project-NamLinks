import React from 'react';
import Nav from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Nav />
         <section className='bg-section'>
            <Container>
               <Row className='align-items-center'>
                  <Col>
                     <img src="https://images.pexels.com/photos/3747137/pexels-photo-3747137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </Col>
                  <Col>
                     <h1>Create your list for making life easy.</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem officia sapiente est quibusdam architecto ab voluptatem error debitis nesciunt, molestiae cum deserunt ullam quaerat optio ut illo laborum molestiae cum deserunt ullam quaerat optio ut illo laborum.</p>
                     <h2>To join with us :</h2>
                     <Link to='/login' className='link login'>Log in</Link>
                     <Link to='/signup' className='link'>Sign up</Link>
                  </Col>
               </Row>
            </Container>
         </section>
    </div>
  )
}

export default Home
