import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
const Teams = (props) => {
    console.log(props.team);
    const { strTeam, strSport, strTeamBadge } = props.team;
    return (
        // <div>
        //     <img src={strTeamBadge} alt="" />
        //     <h3>{strTeam}</h3>
        //     <p>Sports Type:{strSport}</p>
        //     <button >Explore < FontAwesomeIcon icon={faArrowRight} /> </button>
        // </div >

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>Sports Type:{strSport}</Card.Text>
                <Button variant="primary">Explore < FontAwesomeIcon icon={faArrowRight} /></Button>
            </Card.Body>
        </Card >
    );
};

export default Teams;
