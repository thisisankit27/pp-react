import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import ReCAPTCHA from "react-google-recaptcha";

// //this.handleOnChange = this.handleOnChange.bind(this)

// // function handleOnChange(value) {
// //     console.log("Captcha value:", value);
// // }

function NearestClinics() {
    return (
        <div className='m-5'>
            <h5>Search for Nearest Clinics</h5>
            <br></br>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Postal address</b> (Please enter 6 digit Postal code)</Form.Label>
                    <Form.Control type="text" placeholder="Enter Pincode" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDisabilityType" required>
                    <Form.Label><b>Captcha Verification*</b></Form.Label>
                    <Form.Text className="text-muted">
                        <br></br>
                        Google ReCaptcha
                    </Form.Text>
                </Form.Group>
                {/* <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={this.handleOnChange}
                />, */}
                <Button variant="primary" type="submit">
                    Locate The Clinic
                </Button>
            </Form>
        </div>
    );
}

export default NearestClinics;