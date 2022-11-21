import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button';

const physicalDis = () => {
    return (
        <>
            <h2>Physical Disability</h2>
            <p>Under the overall ambit of Physical Disability, three types of disabilities are broadly classified:</p>
            <ol>
                <li><b>Locomotor Disabilities:</b>Locomotor Disability is the disability of the bones, joints or muscles leading to substantial restriction of the movement of the limbs or a usual form of cerebral palsy. Different types of locomotor disabilities are classified as the following-</li>
                <ul>
                    <li><b>Leprosy cured person</b> - Any person who has been cured of leprosy but is suffering from- loss of sensation in hands or feet as well as loss of sensation and partial paralysis in the eyelid but with no visible deformity; visible deformity and partial paralysis but having sufficient mobility in their hands and feet to enable them to engage in normal economic activity; extreme physical deformity as well as advanced age which prevents the person from undertaking any gainful occupation.</li>
                    <li><b>Cerebral palsy</b> - A group of non-progressive conditions characterised by abnormal motor control posture resulting from brain insult or injuries occurring in the perinatal, neonatal or infant period of development.</li>
                    <li><b>Dwarfism</b></li>
                    <li><b>Muscular dystrophy</b></li>
                    <li><b>Acid attack victims</b></li>
                </ul>
            </ol>
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
        </>
    );
}

export default physicalDis;