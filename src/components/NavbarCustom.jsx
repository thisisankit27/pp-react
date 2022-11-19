import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarCustom() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link className="mx-2" href="#action2">Find the Service</Nav.Link>
                        <Nav.Link className="mx-2" href="#action3">Disability Info</Nav.Link>
                        <Nav.Link className="mx-2" href="#action4">Essential Docs</Nav.Link>
                        <Nav.Link className="mx-2" href="#action5">Resources</Nav.Link>
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