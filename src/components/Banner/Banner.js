
import { Jumbotron } from 'react-bootstrap';
import image from '../../image/screen-01-4.png';
import Image from 'react-bootstrap/Image';
const Banner = () => {
    return (
        <Jumbotron>
            <Image src={image} fluid ></Image>
        </Jumbotron >
    );
};

export default Banner;

