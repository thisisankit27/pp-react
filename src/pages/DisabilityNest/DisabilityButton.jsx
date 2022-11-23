import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button';

const DisabilityButton = () => {
    return (
        <>
            <LinkContainer className="m-4" to="/disabilityInfo/physicalDis">
                <Button variant="secondary" xs>Physical Disability</Button>
            </LinkContainer>
            <LinkContainer className="m-4" to="/disabilityInfo/intellectualDis">
                <Button variant="secondary" xs={{ order: 12 }}>Intellectual Disability</Button>
            </LinkContainer>
            <LinkContainer className="m-4" to="/disabilityInfo/mentalDis">
                <Button variant="secondary" xs={{ order: 1 }}>Mental Disability</Button>
            </LinkContainer>
            <br></br>
            <LinkContainer className="m-4" to="/disabilityInfo/neurologicalDis">
                <Button variant="secondary" xs>Neurological</Button>
            </LinkContainer>
            <LinkContainer className="m-4" to="/disabilityInfo/bloodDis">
                <Button variant="secondary" xs={{ order: 12 }}>Blood Disorder</Button>
            </LinkContainer>
            <LinkContainer className="m-4" to="/disabilityInfo/multipleDis">
                <Button variant="secondary" xs={{ order: 1 }}>Multiple Disability</Button>
            </LinkContainer>
        </>
    );
}

export default DisabilityButton;