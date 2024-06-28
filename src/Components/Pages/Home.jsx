import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Products from '../Modules/Products'



const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + "/1.jpg"} width="100%" height="400px" alt="First slide" />
          <Carousel.Caption>
           
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + "/2.jpg"} width="100%" height="400px" alt="Second slide" />
          <Carousel.Caption>
           
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + "/3.jpg"} width="100%" height="400px" alt="Third slide" />
          <Carousel.Caption>
            
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Products />
      </Container>
    </>
  )
}

export default Home
