import React from 'react';

function SongCard({id, title, duration, releaseYear}) {
    return (
        <div>
            <ul type='Song'>
                <li>{id}</li>
                <li>{title}</li>
                <li>{duration}</li>
                <li>{releaseYear}</li>
            </ul>
            
        </div>
    )
}

export default SongCard