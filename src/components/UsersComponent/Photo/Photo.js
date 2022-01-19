import React from 'react';


const Photo = ({photo:{title, thumbnailUrl}}) => {

    return (
        <div>
            <p>title: {title}</p>
            <img src = {thumbnailUrl} alt="picture"/>
        </div>
    );
};

export default Photo;