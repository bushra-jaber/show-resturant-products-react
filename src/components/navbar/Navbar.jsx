import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home" >Eng.Bushra jaber</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  ">
            
            <Link to="/resturant" className='me-4'>Resturant</Link>
            <Link to="/products" >Products</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
