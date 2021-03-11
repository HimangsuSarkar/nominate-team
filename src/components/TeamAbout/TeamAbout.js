
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { Col, Image, Jumbotron, Row } from 'react-bootstrap';
import male from '../../image/male.png';
import female from '../../image/female.png';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './TeamAbout.css';


const TeamAbout = (props) => {

    const { strTeam, intFormedYear, strSport, strCountry, strGender, strDescriptionEN, strTeamBanner, strFacebook, strTwitter, strYoutube } = props.about;
    return (
        < div >
            <Jumbotron className='banner'>
                < Image src={strTeamBanner} fluid className=''></Image>
            </Jumbotron >

            <Row className='bg-success mt-4 p-3 rounded'>
                <Col xs={12} md={6} >
                    <h1>{strTeam}</h1>
                    <p>< FontAwesomeIcon icon={faCalendarCheck} />  Founded:{intFormedYear}</p>
                    <p>< FontAwesomeIcon icon={faFlag} />  Country:{strCountry}</p>
                    <p>< FontAwesomeIcon icon={faFutbol} />  Sport Type:{strSport}</p>
                    <p> < FontAwesomeIcon icon={faMars} />  Gender: {strGender}</p>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={strGender === "Male" ? male : female} thumbnail alt="" />
                </Col>
            </Row>

            <Row className='mt-4 p-3'>
                <p>{strDescriptionEN}</p>
            </Row>

            <Row className='d-flex justify-content-center p-3'>
                <a href={`https://${strTwitter}`} className='px-3'>
                    < FontAwesomeIcon icon={faTwitter} size='3x' />
                </a>
                <a href={`https://${strFacebook}`} className='px-3'>
                    < FontAwesomeIcon icon={faFacebook} size='3x' />
                </a>
                <a href={`https://${strYoutube}`} className='px-3'>
                    < FontAwesomeIcon icon={faYoutube} size='3x' />
                </a>
            </Row>
        </div >
    );
};

export default TeamAbout;
