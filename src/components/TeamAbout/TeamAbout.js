import React from 'react';

const TeamAbout = (props) => {
    console.log(props.about);
    const { strTeam, intFormedYear, strSport, strCountry, strGender, strDescriptionEN, strTeamBanner, strTeamFanart1, strTeamFanart2, strTeamFanart3, strTeamFanart4, strFacebook, strTwitter, strYoutube } = props.about;
    return (
        <div>
            <h1>{strTeam}</h1>
            <p>Founded:{intFormedYear}</p>
            <p>Country:{strCountry}</p>
            <p>Sport Type:{strSport}</p>
            <p>Gender:{strGender}</p>
            <img src={strTeamFanart4} alt="" />
            <div>
                <p>{strDescriptionEN}</p>
            </div>
        </div>

    );
};

export default TeamAbout;
