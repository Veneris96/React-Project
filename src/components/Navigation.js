import {Container, Nav, Navbar} from 'react-bootstrap/'

function Navigation() {

  return (
    <Navbar id='navbar' className='navbar' style={{height: "80px"}} bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{fontSize: "20pt"}}><b>EpiBooks</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="#link">Categories</Nav.Link>
          <Nav.Link href="#link">New Releases</Nav.Link>
          <Nav.Link href="#link">Most Popular</Nav.Link>
          <Nav.Link style={{color: "white"}} href="/ContactUs">Contact Us</Nav.Link>
          <Nav.Link style={{color: "white"}} href="/AboutUs">About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation