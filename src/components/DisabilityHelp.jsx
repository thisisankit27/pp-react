import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const DisabilityHelp = () => {
    return (
        <Navbar className='py-0' bg="light" variant="light" expand="sm">
            <Container fluid>
                <Navbar.Brand className='mx-3' href="#">DCPCR</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/*This totally empty navbar with the class 'me-auto' is significant. */}
                    <Nav className="me-auto ">
                    </Nav>
                    {/*It is responsible for the other nav bar content moving to the right.*/}
                    <Nav variant="tabs" defaultActiveKey="#action4" className="my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                        <NavDropdown title="Language" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action1">English</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action2">हिन्दी</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#action3">Screen Reader Access</Nav.Link>
                        <Nav.Link href="#action4">Font Size</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

export default DisabilityHelp