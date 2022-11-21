import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function findService() {
    return (
        <Card className="m-auto" style={{ width: "60%" }}>
            <Card.Header>Let us help you find relevant scheme and services for you!
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="formDateBirth">
                            <Form.Label >Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="DOB" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFamilyIncome">
                            <Form.Label >Annual Family Income (Optional)</Form.Label>
                            <Form.Select>
                                <option value="" disabled selected>Select Option</option>
                                <option>5-10LPA</option>
                                <option>10-20LPA</option>
                                <option>20+ LPA</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInterestedService">
                            <Form.Label >Are you interested in any type of schemes/services? (Optional)</Form.Label>
                            <Form.Select>
                                <option value="" disabled selected>Select Option</option>
                                <option>All</option>
                                <option>Educational</option>
                                <option>Health</option>
                                <option>Financial</option>
                                <option>Skill & employment</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDisabilityType" required>
                            <Form.Label>Type of disability?</Form.Label>
                            <Form.Select required>
                                <option value="" disabled selected>Select Option</option>
                                <option>Type-1</option>
                                <option>Type-2</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Disability percentage% (Optional)</Form.Label>
                            <Form.Control placeholder="Enter %" />
                        </Form.Group>
                        <Button variant="dark" size="lg" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card >
    );
}

export default findService;
