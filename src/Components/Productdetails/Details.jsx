import { useParams } from 'react-router-dom';
import react from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import DATABASE from '../Products_D/Data.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Details() {
  let { id } = useParams();
  const [productData, setProductData] = useState(
    DATABASE.find((product) => product.id === parseInt(id))
  );

  if (!productData) {
    return (
      <div className="container my-5">
        <h2>Product not found</h2>
        <button className="btn btn-sm btn-primary mb-3">
          <Link
            to="/product"
            className="text-white text-decoration-none"
          >
            Back to Products
          </Link>
        </button>
      </div>
    );
  }

  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center align-item-center'>
          <Col>
            <h1>Details</h1>
            <p> Id: {productData.id}</p>
            <p> Name: {productData.name}</p>
            <img src={productData.image} alt='imagenew'/>
            <p> Price: {productData.Price}</p>
            <p> Description: {productData.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;