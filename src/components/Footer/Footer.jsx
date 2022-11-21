import Button from 'react-bootstrap/Button';
import { BiChat } from 'react-icons/bi'

const Footer = () => {
    return (
        <div>
            {/* <Button className='absolute bottom-0 right-3' variant="dark" size="md"  ><BiChat /></Button > */}
            <Button className='absolute bottom-0 right-10' variant="dark" size="sm"  ><BiChat />Need Assistance ?</Button >
        </div>
    );
}

export default Footer