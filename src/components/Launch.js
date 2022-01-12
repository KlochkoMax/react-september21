import React from 'react';

const Launch = ({launch}) => {
    return (
        <div className={'launch'}>
            <h4>{launch.mission_name}<br/>{launch.launch_year}</h4>
            <img src={launch.links.mission_patch_small} alt="picture"/>
        </div>
    );
};

export default Launch;