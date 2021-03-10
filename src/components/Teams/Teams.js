import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TeamDetails from '../TeamDetails/TeamDetails';
const Teams = (props) => {
    // console.log(props.team);
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;

    return (

        <Container>
            <Row >
                <Col>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={strTeamBadge} />
                        <Card.Body>
                            <Card.Title>{strTeam}</Card.Title>
                            <Card.Text>Sports Type:{strSport}</Card.Text>
                            <Link to={`/team/${idTeam}`}> <Button variant="primary">Explore < FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                        </Card.Body>
                    </Card >
                </Col >
            </Row >
        </Container >

    );
};

export default Teams;
