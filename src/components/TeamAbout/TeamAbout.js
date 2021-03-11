
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import { Col, Image, Row } from 'react-bootstrap';
import facebook from '../../icon/Facebook.png'
import twitter from '../../icon/Twitter.png'
import youtube from '../../icon/YouTube.png'

const TeamAbout = (props) => {
    // console.log(props.about);
    const { idTeam } = useParams();

    const { strTeam, intFormedYear, strSport, strCountry, strGender, strDescriptionEN, strTeamBanner, strTeamJersey, strTeamLogo, strFacebook, strTwitter, strYoutube } = props.about;
    return (
        < div >
            <Image src={strTeamBanner} fluid></Image>
            <Row>
                <Col xs={12} md={6}>
                    <h1>{strTeam}</h1>
                    <p>< FontAwesomeIcon icon={faCalendarCheck} />Founded:{intFormedYear}</p>
                    <p>< FontAwesomeIcon icon={faFlag} />Country:{strCountry}</p>
                    <p>< FontAwesomeIcon icon={faFutbol} />Sport Type:{strSport}</p>
                    < p > < FontAwesomeIcon icon={faMars} />Gender: {strGender}</p>
                </Col>
                <Col xs={12} md={6}>
                    <img src={strGender === "Male" ? strTeamLogo : strTeamBanner} rounded alt="" />

                </Col>
            </Row>
            <Row>
                <p>{strDescriptionEN}</p>
            </Row>
            <Row>
                <a href={`https://${strFacebook}`} target="_blank">
                    <img style={{ maxWidth: "70px" }} src={facebook} alt="" />
                </a>
                <a href={`https://${strTwitter}`} target="_blank">
                    <img style={{ maxWidth: "70px" }} src={twitter} alt="" />
                </a>
                <a href={`https://${strYoutube}`} target="_blank">
                    <img style={{ maxWidth: "70px" }} src={youtube} alt="" />
                </a>
            </Row>

        </div >


    );
};

export default TeamAbout;
