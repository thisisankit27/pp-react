import Button from 'react-bootstrap/Button';
import { BiChat } from 'react-icons/bi'

const Footer = () => {
    return (
        <div className='grid place-content-end h-48 ...'>
            {/* <Button className='absolute bottom-0 right-3' variant="dark" size="md"  ><BiChat /></Button > */}
            <Button variant="dark" size="sm"  ><BiChat />Need Assistance ?</Button >
        </div>
    );
}

export default Footer