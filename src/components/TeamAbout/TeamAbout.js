import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faFlag, faFootballBall, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import Banner from '../Banner/Banner';
import { useParams } from 'react-router';

const TeamAbout = (props) => {
    // console.log(props.about);
    const { idTeam } = useParams();

    const { strTeam, intFormedYear, strSport, strCountry, strGender, strDescriptionEN, strTeamBanner, strTeamFanart1, strTeamFanart2, strTeamFanart3, strTeamFanart4, strFacebook, strTwitter, strYoutube } = props.about;
    return (
        <div>
            <h1>{strTeam}</h1>
            <p>< FontAwesomeIcon icon={faCalendarCheck} />Founded:{intFormedYear}</p>
            <p>< FontAwesomeIcon icon={faFlag} />Country:{strCountry}</p>
            <p>< FontAwesomeIcon icon={faFutbol} />Sport Type:{strSport}</p>
            < p > < FontAwesomeIcon icon={faMars} />Gender: {strGender}</p>
            < img src={strTeamFanart4} alt="" />
            <div>
                <p>{strDescriptionEN}</p>
            </div>

        </div >

    );
};

export default TeamAbout;
