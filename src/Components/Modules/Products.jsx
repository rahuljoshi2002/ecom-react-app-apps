import React, { useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'

const Products = () => {
    const [Items, setItems] = useState([
        {
            id: 1,
            product_name: "Product 1",
            price: 999,
            Image: "/5.jpg",
        },
        {
            id: 2,
            product_name: "Product 2",
            price: 999,
            Image: "/6.jpg",
        },
        {
            id: 3,
            product_name: "Product 3",
            price: 999,
            Image: "/7.jpg",
        },
        {
            id: 4,
            product_name: "Product 4",
            price: 999,
            Image: "/8.jpg",
        },
        {
            id: 5,
            product_name: "Product 5",
            price: 999,
            Image: "/9.jpg",
        },
        {
            id: 6,
            product_name: "Product 6",
            price: 999,
            Image: "/10.jpg",
        },
        {
            id: 7,
            product_name: "Product 7",
            price: 999,
            Image: "/11.jpg",
        },
        {
            id: 8,
            product_name: "Product 8",
            price: 999,
            Image: "/12.jpg",
        },
    ])

    const [wishlist, setWishlist] = useState([])

    const handleWishlist = (id) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id))
        } else {
            setWishlist([...wishlist, id])
        }
    }

    return (
        <Container style={{ marginTop: '20px' }}>
         
            <div className="mb-5">
                <h1 className="text-center">Our Shirt Section</h1>
                <p className="text-center">Check out our wide range of Shirts. Add your favorites to the wishlist or buy them now!</p>
            </div>

    
            <Row>
                {Items.map((elem) => {
                    const isWishlisted = wishlist.includes(elem.id)
                    return (
                        <Col key={elem.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card>
                                <Card.Img 
                                    variant='top' 
                                    style={{ height: "300px", width: "100%", objectFit: "contain" }}
                                    src={process.env.PUBLIC_URL + elem.Image} 
                                />
                                <Card.Body>
                                    <Card.Title>{elem.product_name}</Card.Title>
                                    <Card.Text>${elem.price}</Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="primary" className="me-2">Buy Now</Button>
                                        <Button
                                            variant={isWishlisted ? "danger" : "outline-secondary"}
                                            onClick={() => handleWishlist(elem.id)}
                                        >
                                            {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Products
