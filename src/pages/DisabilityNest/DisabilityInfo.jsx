import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button';

const disabilityInfo = () => {
    return (

        <div className='text-center'>
            <p style={{ margin: "3% 13%" }}>
                <p>The Rights of Persons with Disabilities Act, 2016, defines the term Person with Disability as “a person with long term physical, mental, intellectual or sensory impairment which, in interaction with barriers, hinders his full and effective participation in society equally with others.”</p>

                <p>The Act also specifies a comprehensive list of 21 disabilities, which are included under the ambit of the Act and are broadly classified into 6 major categories https://legislative.gov.in/sites/default/files/A2016-49_1.pdf</p>
            </p>

            <LinkContainer to="/disabilityInfo/physicalDis">
                <Button variant="secondary">Physical Disability</Button>
            </LinkContainer>
            <LinkContainer to="/disabilityInfo/intellectualDis">
                <Button variant="secondary">Intellectual Disability</Button>
            </LinkContainer>
            <LinkContainer to="/disabilityInfo/mentalDis">
                <Button variant="secondary">Mental Disability</Button>
            </LinkContainer>
            <LinkContainer to="/disabilityInfo/neurologicalDis">
                <Button variant="secondary">Neurological</Button>
            </LinkContainer>
            <LinkContainer to="/disabilityInfo/bloodDis">
                <Button variant="secondary">Blood Disorder</Button>
            </LinkContainer>
            <LinkContainer to="/disabilityInfo/multipleDis">
                <Button variant="secondary">Multiple Disability</Button>
            </LinkContainer>
        </div >
    );
}

export default disabilityInfo;
