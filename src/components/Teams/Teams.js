import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Teams = (props) => {
    // console.log(props.team);
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;

    return (
        < Card style={{ width: '18rem' }} className=" p-4  text-center" >
            < Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>Sports Type:{strSport}</Card.Text>
                <Link to={`/team/${idTeam}`}> <Button variant="primary">Explore < FontAwesomeIcon icon={faArrowRight} /></Button></Link>
            </Card.Body>
        </Card >

    );
};

export default Teams;
