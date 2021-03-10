import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router';
import TeamAbout from '../TeamAbout/TeamAbout';

const TeamDetails = (props) => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))

    }, [])

    return (
        <div>
            <h4>this is friend Details:{idTeam}</h4>
            {
                team.map(about => <TeamAbout about={about}></TeamAbout>)
            }
        </div >
    );
};

export default TeamDetails;
