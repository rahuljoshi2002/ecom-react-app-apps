import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const About = () => {
  return (
    
    <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="../14.jpg"
            rounded
            fluid
          />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to our store! We are dedicated to providing you with the best
            products and services. Our mission is to offer high-quality items at
            affordable prices, ensuring customer satisfaction with every purchase.
          </p>
          <p>
            Our team is passionate about what we do, and we strive to continuously
            improve our offerings. We believe in building strong relationships with
            our customers and are always here to help with any questions or concerns
            you may have. Thank you for choosing us!
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
