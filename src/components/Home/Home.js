import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import TeamAbout from '../TeamAbout/TeamAbout';
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);


    return (
        <div>
            <Banner></Banner>
            <Container>
                <Row>
                    {
                        teams.map(team => <Col xs={12} md={4}>< Teams team={team}> </Teams></Col>)
                    }
                </Row>
            </Container>


        </div >

    );
};

export default Home;
