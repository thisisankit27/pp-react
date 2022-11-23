import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function NavbarCustom() {
    return (
        <Navbar className='sticky-top' bg="dark" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/findService">
                            <Nav.Link className="mx-2"> Find the Service </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/disabilityInfo">
                            <Nav.Link className="mx-2">Disability Info</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/essentialDoc">
                            <Nav.Link className="mx-2">Essential Docs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/resources">
                            <Nav.Link className="mx-2">Resources</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex" style={{ width: "30%" }}>
                        <Form.Control
                            type="search"
                            placeholder="Search for schemes/services"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavbarCustom;