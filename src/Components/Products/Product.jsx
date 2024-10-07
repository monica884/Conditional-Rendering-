
import './Product.css';
import DATABASE from '../Products_D/Data.json'
import { Col, Container, Row, Card, CardBody, Button, CardFooter } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { Link } from 'react-router-dom';



function Product() {
  const [logout, setLogout] = useState(false)
  const navigate = useNavigate();
  if (logout) {
    navigate('/');
  }


  return (
    <>

      <Container fluid>

        <Row>
          <Col lg={3} md={6} sm={6}>
            <Button onClick={() => setLogout(true)}>Logout</Button>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <Row>
              {
                DATABASE && DATABASE.map(({ name, Price, id, image }) =>
                  <Col lg={4} key={id}>
                    <Card className="my-2">
                      <CardBody>
                        <Col className="col-12">
                          <img src={image} className='img' alt={name} />
                        </Col>
                      </CardBody>
                      <CardFooter>
                        <Row>
                          <Col className="col-5">
                            <p>Name : {name}</p>
                          </Col>
                          <Col className="col-4">
                            <p>Price :  {Price}</p>
                          </Col>
                          <Col className="col-3">
                            <button className="btn btn-sm btn-primary mb-2">
                              <Link
                                to={`/details/${id}`}
                                className="text-white text-decoration-none"
                              >
                                View Details
                              </Link>
                            </button>
                          </Col>
                        </Row>
                      </CardFooter>
                    </Card>

                  </Col>
                )
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Product;