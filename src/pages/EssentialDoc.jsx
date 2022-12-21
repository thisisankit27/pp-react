import Accordion from 'react-bootstrap/Accordion';

const essentialDoc = () => {
    return (
        <div>
            <div className='m-5'>
                <Accordion flush>
                    <h4>1. Disability Certificate</h4>
                    <br></br>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is a Disability Certificate?</Accordion.Header>
                        <Accordion.Body>
                            Disability Certificate or Handicap Certificate (as it may alternatively be called) is a document that certifies the type and degree of disability that has affected the person.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is the process to avail a Disability Certificate?</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Stepwise process of obtaining a disability certificate is as follows-
                                    <br></br>
                                    <ol type="a" className='my-4'>
                                        <li>The disabled person must visit a Medical Hospital for the specific disability (List attached in <a href="https://docs.google.com/document/d/1qquaTFyppBYAx99zsp8RaS4sNyW5a0i0ccp2NlkEAjs/edit#heading=h.cvuedgdlcltb" target="_blank" rel="noreferrer nofollow">Chapter 10.2</a>).</li>
                                        <br></br>
                                        <li>The doctor will prescribe tests depending on disability.</li>
                                        <br></br>
                                        <li>Duly filled form as attached in <a href="https://drive.google.com/file/d/1htOJA7ZhMhXiBPcFOcvUcqfKbxxjiTG_/view?usp=sharing" target="_blank" rel="noreferrer nofollow">Annexure 1</a> along with documents and test reports need to be submitted to the concerned Doctor in the Medical Hospital.</li>
                                        <br></br>
                                        <li>A committee of doctors will consider the case and examine the person.</li>
                                        <br></br>
                                        <li>If approved, the person is asked to collect the certificate at a later date.</li>
                                    </ol>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What are the documents required to be submitted by a disabled person to obtain a Disability Certificate? </Accordion.Header>
                        <Accordion.Body>
                            <ol type='a' className='my-4'>
                                <li>Two recent coloured personal photos of the person with disability</li>
                                <li>Copy of the I.D. proof (Aadhar Card is best)</li>
                                <li>Copy of the address proof (Aadhar Card is best)</li>
                                <li>Copies of available medical reports</li>
                                <li>Copy of the previous Disability Certificate (in case it is being renewed)</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How long is the disability certificate valid for?</Accordion.Header>
                        <Accordion.Body>
                            For children below the age of 18, the validity is for 5 years, whereas for those over 18, the validity is lifelong.
                            <br></br>
                            <a href="https://drive.google.com/file/d/1htOJA7ZhMhXiBPcFOcvUcqfKbxxjiTG_/view" target="_blank" rel="noreferrer nofollow">Application Link</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <br></br>
                    <h4>2. Unique Disability ID</h4>
                    <br></br>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What is a Unique Disability ID?</Accordion.Header>
                        <Accordion.Body>
                            Unique Disability ID is a single source document for identification, and verification of the disabled for availing benefits that they are eligible for under the various schemes and acts.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>What is the process to avail a Unique Disability ID (UDID) ?</Accordion.Header>
                        <Accordion.Body>
                            <ol type='a'>
                                <li>Persons with disability to use <a href="https://www.swavlambancard.gov.in/" target="_blank" rel="noreferrer nofollow">Link</a>  website or register with the UDID web portal on<a href="https://www.swavlambancard.gov.in/pwd/application" target="_blank" rel="noreferrer nofollow">Link</a>.</li>
                                <li>Using Enrolment Number / UDID Number and Date of Birth, log into the system and click “Apply online for Disability Certificate”. Read instructions and fill out the online application.</li>
                                <li>To apply offline, fill out the form as placed in <a href="https://drive.google.com/file/d/1iMAoPOoVFlZRl2tbT0vYe8kH9VXGfjy0/view?usp=sharing" target="_blank" rel="noreferrer nofollow">Annexure 2</a>  It can also be downloaded from <a href="https://www.swavlambancard.gov.in/" target="_blank" rel="noreferrer nofollow">Link</a>. After filling the application form with personal details, address details, disability details, employment details and identity details,  it should be submitted at the District Disability Rehabilitation Centres (DDRC) along with the required documents as mentioned in point 5 below.</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Is it mandatory to get a UDID?</Accordion.Header>
                        <Accordion.Body>
                            UDID certificate is not mandatory for availing any direct benefits for PwDs whereas Disability Certificate is.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>What are the documents required to be submitted by a disabled person to obtain a UDID?</Accordion.Header>
                        <Accordion.Body>
                            <ol type='i'>
                                <li>Scanned copy of recent colour photo.</li>
                                <li>Scanned image of signature (Optional)</li>
                                <li>Scanned copy of Address Proof (Aadhar/Driving Licence/State Domicile  etc.)</li>
                                <li>Scanned copy of Identity Proof (Aadhar Card/PAN Card/Driving Licence etc.)</li>
                                <li>Scanned copy of Disability Certificate (Only for those Persons with Disability who have been issued Disability Certificates by the respective Medical boards constituted at a State or District level. Disability wise list of medical authorities is placed in <a href="https://docs.google.com/document/d/1qquaTFyppBYAx99zsp8RaS4sNyW5a0i0ccp2NlkEAjs/edit#heading=h.cvuedgdlcltb" target="_blank" rel="noreferrer nofollow">Chapter 10.2.</a></li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Why is the Government encouraging Disabled Persons to get the UDID card?</Accordion.Header>
                        <Accordion.Body>
                            The UDID Card will help in streamlining the tracking of the physical and financial progress of beneficiaries at all levels of hierarchy of implementation – from village level, block level, district level, state level right upto the national level.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Why is it useful for a disabled person to get a UDID?</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    The UDID card shall bring a host of benefits to the Persons with Disabilities as given below:
                                    <ol type='a'>
                                        <li>Persons with disabilities will not need to make multiple copies of documents, maintain, and carry multiple documents as the card will capture all the necessary details which can be decoded with the help of a reader.</li>
                                        <li>The UDID card will be the single document of identification, and verification of the disabled for availing various benefits in the future.</li>
                                    </ol>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div >
        </div>
    );
}

export default essentialDoc;
