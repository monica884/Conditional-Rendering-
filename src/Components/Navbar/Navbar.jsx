
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Navbar() {

  return (
    <>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Link to='/home'>Home</Link>
            <Link to='/product'>Product</Link>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Navbar;