import Button from 'react-bootstrap/Button';

const HomeContent = () => {
    return (
        <div className='text-center'>
            <h1 style={{ margin: "7% 0% 2% 0%" }}>Child Rights</h1>
            <p style={{ margin: "3% 13%" }}>The Delhi Commission for Protection of Child Rights has attempted to create extensive repository of all existing entitlements and relevant information which could be of benefit to Persons with Disabilities & their caregivers in Delhi. This website aims to address the information asymmetry by creating awareness about the rights of Persons with Disabilities, especially Children with Special Needs or Children who have parents with disabilities & assist them in understanding the means of leveraging rightful entitlements for their own benefit.</p>
            <p style={{ margin: "3% 0%" }}>Click to know your rights & entitlement</p>
            <Button variant="dark" size="lg">Get Started</Button>
        </div >
    );
}

export default HomeContent;