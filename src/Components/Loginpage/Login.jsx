
import { Container, Row, Col, Button, Form, FormControl, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Login.css';
import { useNavigate } from 'react-router-dom';




function Login(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [admin, setAdmin] = useState('');
  const [apassword, setApassword] = useState('');
  const navigate = useNavigate();


  function handleOnsubmit(e) {
    e.preventDefault();
        if (admin === 'admin' && apassword === 'admin123') {
      navigate('/admin');
    }
     else if (admin === 'user' && apassword === 'user123') {
      navigate('/product');
     }
     else {
       alert('please enter valid input');
     }
  }


  function handleadminBlur(e) {
    setAdmin(e.target.value)
    console.log(admin)
  }

  function handlePasswordBlur(e) {
    setApassword(e.target.value)
    console.log(apassword)
  }

  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center align-item-center'>
          <Col className='col-4' >

          </Col>
          <h1 className='text-center'>
            Please login
          </h1>


          <Col lg={12} md={12} sm={12} className='d-flex justify-content-center align-item-center mt-5 '>
           <div className=''>
                <Button variant="primary" onClick={handleShow}  >
                  Login
                </Button>
              </div>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Admin or User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleOnsubmit} >
                    <div className="mb-3" >
                      <FloatingLabel controlId="admin" label="admin" >
                        <FormControl type="text" placeholder="" name="admin" onBlur={handleadminBlur} />
                      </FloatingLabel>
                      <Form.Text className="text-danger" ></Form.Text>
                    </div>
                    <div className="mb-3" >
                      <FloatingLabel controlId="apassword" label="apassword" className="mb-3" >
                        <FormControl type="password" placeholder="" name="apassword" onBlur={handlePasswordBlur} />
                        <Form.Text className="text-danger" ></Form.Text>
                      </FloatingLabel>
                    </div>
                    <Button type='submint'>submite</Button>
                    <Button type='reset'>Reset</Button>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>

                </Modal.Footer>
              </Modal>

   
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;